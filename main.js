const { app, BrowserWindow } = require('electron')
const electronEvents = require('./electron_src/electronEvents')

const dotenv = require('dotenv')
dotenv.config()

let win

function createWindow () {
  win = new BrowserWindow({ 
    width: 400, 
    height: 400
  })
  // win.loadFile('index.html')
  const availablePort = process.env.PORT || 3000
  win.loadURL(`http://localhost:${availablePort}/`)
  win.on('closed', () => {
    win = null
  })
}

app.on('ready', createWindow)

app.on('window-all-closed', () => {
  if(process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', () => {
  if(win === null) createWindow()
})

electronEvents()
