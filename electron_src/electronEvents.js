const { ipcMain } = require('electron')

module.exports = electronEvents = async () => {

  // Receive request from web.
  ipcMain.on('HELLO_WORLD', async (event, arg) => {
    const payloads = JSON.parse(arg)

    console.log('Received From Web:', payloads)

    const response = {
      payloads,
      fromElectron: 'Yes'
    }
    
    // Send response back to web.
    event.sender.send(
      'HELLO_WORLD_RESPONSE', 
      JSON.stringify(response)
    )
  })

}