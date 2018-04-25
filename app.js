const {app, BrowserWindow, Men, ipcMain} = require('electron')

const path = require('path')
const url = require('url')

app.on('ready', function(){

    var mainWindow = new BrowserWindow(
        {
            width: 900,
            height: 900,
            icon: 'ressources/img/icon.png'

        }
    )

    mainWindow.loadURL(url.format({
        pathname: path.join(__dirname, 'ressources/views/index.html'),
        protocol: 'file:',
        slashes: true
      }))

      mainWindow.on('close', function(){
          mainWindow = null
      })

      mainWindow.webContents.openDevTools()

      var infoWindow = new BrowserWindow({
          width:500,
          height:500,
          icon: 'ressources/img/icon.png',
          show: false,
      })

      infoWindow.loadURL(url.format({
        pathname: path.join(__dirname, 'ressources/views/info.html'),
        protocol: 'file:',
        slashes: true
      }))

      infoWindow.on('close', function(event){
        infoWindow.hide()
        event.defaultPrevented()
    })

    infoWindow.webContents.openDevTools()

    ipcMain.on('show_detail', function(id){
        infoWindow.show()
    })
})

app.on("window-all-close", function(){
    app.quit()
})

app.on('activate', () => {
    if (mainWindow === null) {
      createWindow()
    }
})