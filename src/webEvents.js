const { ipcRenderer } = window.require('electron')

export default (type, options) => new Promise((resolve, reject) => {
  ipcRenderer.send(type, JSON.stringify({ type, ...options }))
  ipcRenderer.once(`${type}_RESPONSE`, (event, arg) => {
    try {
      const data = JSON.parse(arg)
      console.log('Response From Electron: ', data)
      resolve(data)
    } catch (error) {
      console.log('webEvents.js Error: ', error)
      reject(error)
    }
  })
})