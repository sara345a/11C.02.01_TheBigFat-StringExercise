"use strict"

window.addEventListener("load", start);

//Start
function start(){
    console.log("start");

    document.querySelector("#clear").addEventListener("click", clear);

    clickGenOutput();
}

//Make generate clickable
function clickGenOutput(){
    console.log("clickGenOutput");

    document.querySelector("#genoutput").addEventListener("click", genOutput);
}

function readInput(){
    console.log("readInput");

    let input
}

function genOutput(){
    console.log("generateOutput");

//Skal hente input fra 'readInput' via 'return'

}

function clear() {
    console.log("clearOutput");
    document.querySelector("#output").innerHTML = "";
}
