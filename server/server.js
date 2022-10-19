const express = require('express');
// const cors = require('cors');

const app = express();
app.use(express.json())
// app.use(cors());

const port = 5007;
app.listen(port, () => console.log(`Listening on part ${port}`))

let cars = [
    {id : 1, "car": "Audi"},
    {id : 2, "car": "Porsche"},
    {id : 3, "car": "Volkswagen"},
    {id : 4, "car": "Bentley"}]

app.get("/cars", (req, res) => {
    res.status(200).send(cars)
})

app.get("/cars/random", function(req, res) {
    res.type("text/plain")
    let rn = Math.floor(Math.random() * cars.length+1);
    res.send(cars[rn])

    
})
// for every car in cars (.length), return a random index
