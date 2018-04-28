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

      // mainWindow.webContents.openDevTools()

      var infoWindow = new BrowserWindow({
          width:800,
          height:800,
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
        event.preventDefault()
    })

    //infoWindow.webContents.openDevTools()

    ipcMain.on('show_detail', (event, arg)=>{
        infoWindow.webContents.send("show_more", arg)
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