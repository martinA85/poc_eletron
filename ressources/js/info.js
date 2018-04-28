console.log("info.js");

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
    ipcRenderer.send('show_detail', id)
}