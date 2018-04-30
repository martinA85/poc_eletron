//On charge IpcRenderer pour comuniquer avec le script principal "app.js"
const {ipcRenderer}= require('electron');

//Code executer sur le signal "show_more"
ipcRenderer.on('show_more', (event, arg)=>{
    getDetail(arg)
})

function getDetail(id){

    httpRequest = new XMLHttpRequest();

    url = 'https://swapi.co/api/starships/'+ id +'/'

    httpRequest.open('GET', url);
    httpRequest.responseType = 'json'
    httpRequest.send();

    httpRequest.onload = function(){
        response = httpRequest.response
        print_info(response)
    }
}


function print_info(response){
    document.title = response.name
    document.getElementById("spaceship_name").innerHTML = response.name
    document.getElementById("model").innerHTML = response.model
    document.getElementById("facto").innerHTML = response.manufacturer
    document.getElementById("cost").innerHTML = response.cost_in_credits
}
