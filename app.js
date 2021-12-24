//Setup
let express = require("express");
let app = express();
const http = require("http");

app.use(express.urlencoded({extended: true}));
app.use(express.static("public"));

//Home Route
app.get("/", (req,res) => {
    res.sendFile(__dirname + "/index.html");

    // getNewQuote();
});

//API routes
app.get("/newQuote", (req,res) => {

    let parsedData = {};

    console.log("Quote button pressed.")
    const url = "http://api.quotable.io/random";

    http.get(url, (response) => {
        response.on("data", (data) => {
            parsedData = JSON.parse(data)
            const stringData = JSON.stringify(data);
            console.log("Inside response");
            console.log(data);
            res.send(data);
            // res.end(data);
        });
        // console.log("Inside http");
        // console.log(parsedData);
    });

    // console.log("Inside get");
    // console.log(parsedData);
    // res.send(res.status);
    // res.redirect("/");
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
