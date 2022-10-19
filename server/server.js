const express = require('express');
// const cors = require('cors');

const app = express();
app.use(express.json())
// app.use(cors());

const port = 3000;
app.listen(port, () => console.log(`Listening on part ${port}`))

app.get("/", (req, res) => {
    res.status(200).send()
})
