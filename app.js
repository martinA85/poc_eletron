//Constante d'electron :
//app => gestion des fonction de l'application (ouverture, fermeture ...)
//BrowserWindow => gestion des fenêtres de l'application
//Men => gestion des menu de l'application
//IpcMain => passage de données entre les differentes fenetres
const {app, BrowserWindow, Men, ipcMain} = require('electron')

//constante pour les chemins de fichier dans l'application
const path = require('path')
const url = require('url')

//Code executer quand l'application est pretes
app.on('ready', function(){

    //Declaration de le fenêtre principal
    var mainWindow = new BrowserWindow(
        {
            width: 900,
            height: 900,
            icon: 'ressources/img/icon.png'

        }
    )

    //Chargement du fichier html de la page
    mainWindow.loadURL(url.format({
        pathname: path.join(__dirname, 'ressources/views/index.html'),
        protocol: 'file:',
        slashes: true
      }))

      //Code executer a la fermeture de la fenêtre principale
      mainWindow.on('close', function(){
          mainWindow = null
      })

      //ouverture des outils developeurs sur la page
      // mainWindow.webContents.openDevTools()

      //Déclaration de la fenêtre infoWindows (show = false car on la veut masquer)
      var infoWindow = new BrowserWindow({
          width:800,
          height:800,
          icon: 'ressources/img/icon.png',
          show: false,
      })

      //Chargement du fichier html de la page
      infoWindow.loadURL(url.format({
        pathname: path.join(__dirname, 'ressources/views/info.html'),
        protocol: 'file:',
        slashes: true
      }))

      //Code à la fermeture de la fenêtre
      infoWindow.on('close', function(event){
        infoWindow.hide()
        //utiliser pour que la fenêtre ne soit pas desinstancier et qu'on puissent la réouvrir plus tard
        event.preventDefault()
    })

    //Outils developeurs
    //infoWindow.webContents.openDevTools()

    //Fonction déclencher par le process de rendu de la fenêtre principal
    ipcMain.on('show_detail', (event, arg)=>{
        //Envoi un signal à la fenêtre info
        infoWindow.webContents.send("show_more", arg)
        //montre la fenêntre info
        infoWindow.show()
    })
})

//Sur l'evenement ou toutes les fenetre sont fermer : quitte l'application
app.on("window-all-close", function(){
    app.quit()
})