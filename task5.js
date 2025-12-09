"use strict";


let a = +prompt("Įveskite skaičių: ");
let b = +prompt("Įveskite skaičių: ");
let c = +prompt("Įveskite skaičių: ");
let d = +prompt("Įveskite skaičių: ");
let e = +prompt("Įveskite skaičių: ");
let f = +prompt("Įveskite skaičių: ");
let g = +prompt("Įveskite skaičių: ");
let h = +prompt("Įveskite skaičių: ");
let j = +prompt("Įveskite skaičių: ");
let i = +prompt("Įveskite skaičių: ");

let array = [a, b, c, d, e, f, g, h, j, i];


let evenNum = 0;

for (let index = 0; index < array.length; index++){
    if(array[index] % 2 == 0){
        evenNum++;
    }
}

let result;
if (evenNum >0){
    result = evenNum;
}
    else{
        result = "Nėra";
    }

document.getElementById("friendsNumbers").innerHTML = result;

