console.log("info.js");
//On charge IpcRenderer pour comuniquer avec le script principal "app.js"
const {ipcRenderer}= require('electron');

window.onload = init;


function init(){
    var clickable = document.getElementsByClassName("clickable");

    for(var i = 0; i < clickable.length; i++){
        clickable[i].addEventListener("click",getInfo);
    }
}


function getInfo(){
    element = this;
    id = element.getElementsByClassName("id")[0].value;
    //on envoie un signal à app.js avec l'id de l'element cliquer
    ipcRenderer.send('show_detail', id)
}