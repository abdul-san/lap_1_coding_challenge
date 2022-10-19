import { text, response } from "express";
const myText = document.querySelector("#text")

const luckyBtn = document.querySelector("#lucky");

luckyBtn.addEventListener("submit", getLucky());

// getLucky();

function getLucky(){
    fetch("http://localhost:5008/cars/random")
    // .then(r => r.json())
    // .then(cars)
    // .catch(console.warn)
    .then((response) => response.text())
    .then(text => document.getElementById('text').textContent = text)
    // .then((data) => console.log(data));
    // .then((data)=> { myText.textContent = data})
}

// function getLucky() {
//     document.getElementById("demo").innerHTML = "http://localhost:5007/cars";
//   }


