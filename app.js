const {app, BrowserWindow, Menu} = require('electron')

const path = require('path')
const url = require('url')

app.on('ready', function(){

    var mainWindow = new BrowserWindow(
        {
            width: 900,
            height: 900,
        }
    )

})