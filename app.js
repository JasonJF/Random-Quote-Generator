//Setup
let express = require("express");
let app = express();
const http = require("http");

app.use(express.urlencoded({extended: true}));
app.use(express.static("public"));

//Home Route
app.get("/", (req,res) => {
    res.sendFile(__dirname + "/index.html");
});

//API routes
app.post("/", (req,res) => {

    console.log("Quote button pressed.")
    const url = "http://api.quotable.io/random";

    http.get(url, (response) => {
        response.on("data", (data) => {
            const parsedData = JSON.parse(data);
            console.log(parsedData);
        });
    });
});
app.listen(3000, () => {
    console.log("Server started on port 3000");
});

//button click
const userAction = async () => {
    console.log("button pressed.")
    const response = await fetch('http://api.quotable.io/random');
    const myJson = await response.json(); //extract JSON from the http response
    // do something with myJson
  }
