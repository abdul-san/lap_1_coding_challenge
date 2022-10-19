const luckyBtn = document.querySelector("#lucky");

luckyBtn.addEventListener("submit", getLucky);

getLucky();

function getLucky(){
    fetch("http://localhost:5007/cars")
    // .then(r => r.json())
    .then(cars)
    // .catch(console.warn)
    .then((response) => response.json())
    .then((data) => console.log(data));
}
