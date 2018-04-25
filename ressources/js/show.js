const {ipcRenderer}= require('electron');

ipcRenderer.on('show_detail', function(id){
    console.log(id)
})

