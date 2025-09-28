import "bootstrap";
import "./style.css";



let who = ['Mi abuela invalida', 'El cartero ciego', 'Mi pez zombie', 'El gato psicópata'];
let action = ['devoró', 'escondió', 'aplastó', 'quemó'];
let what = ['mi tarea', 'mi teléfono', 'el carro', 'mi computadora'];
let when = ['antes de la clase', 'mientras dormía', 'durante mi almuerzo', 'mientras rezaba por mi vida'];


function generateExcuse() {
    let randomWho = who[Math.floor(Math.random() * who.length)];
    let randomAction = action[Math.floor(Math.random() * action.length)];
    let randomWhat = what[Math.floor(Math.random() * what.length)];
    let randomWhen = when[Math.floor(Math.random() * when.length)];

    let excuse = `${randomWho} ${randomAction} ${randomWhat} ${randomWhen}`;
    document.getElementById("excuse").innerHTML = excuse;
}

window.onload = function() {
 
  generateExcuse(); 

   const button = document.getElementById("new-excuse-btn");
    if(button) { 
        button.onclick = generateExcuse;
         }
};


