"use strict"

window.addEventListener("DOMContentLoaded", start);

//Start
function start() {
    console.log("start");
    document.querySelector("#genoutput").addEventListener("click", readOptionInput);
}

function readOptionInput() {
    const readInput = document.querySelector("#input").value;
    const operatorInput = document.querySelector("#operator");


 const firstSpace = readInput.indexOf(" ");
 const lastSpace = readInput.lastIndexOf(" ");

 const lastPng = readInput.lastIndexOf(".");
 const lastJpg = readInput.lastIndexOf(".");
 const findPng = readInput.substring(lastPng + 1);
 const findJpg = readInput.substring(lastJpg + 1);

 const star = "*";

const replace = readInput.substring(firstSpace + 1);

 let finalOutput = "";
   //if-statements
   if (operatorInput.value === "opt1") {
    finalOutput = readInput.substring(0, 1).toUpperCase() + readInput.substring(1);
    console.log(finalOutput);
    showOutput();
   }else if (operatorInput.value==="opt2") {
    finalOutput = readInput.substring(0, firstSpace);
    showOutput();
    console.log(finalOutput);
   }else if (operatorInput.value === "opt3") {
       finalOutput = readInput.substring(0, firstSpace).length;
       console.log(finalOutput);
       showOutput();
   }else if (operatorInput.value === "opt4") {
       finalOutput = readInput.substring(firstSpace + 1, lastSpace).trim();
       console.log(finalOutput);
       showOutput();
   }else if (operatorInput.value==="opt5") {
       if (findJpg === "jpg" || findPng === "png") {
           console.log("true");
           finalOutput = readInput;
           console.log(finalOutput);
       }else {
        console.log("false");
        finalOutput = "ERROR! use a filename!";
          }
        showOutput();
   }else if (operatorInput.value === "opt6") {
       finalOutput = star.repeat(readInput.length);
       console.log(finalOutput);
       showOutput();
   }else if (operatorInput.value === "opt7") {
       const thing1 = readInput.substring(0,2).toLowerCase();
       const thing2 = readInput[2].toUpperCase();
       const thing3 = readInput.substring(3).toLowerCase();

       finalOutput = thing1 + thing2 + thing3;
       console.log(finalOutput);
       showOutput();
   }
 else {
       finalOutput = readInput.substring(0, 1).toUpperCase() + readInput.substring(1);
       console.log(finalOutput);
       showOutput();
   }
}

function showOutput() {
    let finalOutput = "";
    document.querySelector("#output").value = finalOutput.toString();
}
