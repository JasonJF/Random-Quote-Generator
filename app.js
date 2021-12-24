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

    const url = "http://api.quotable.io/random";

    http.get(url, (response) => {
        response.on("data", (data) => {
            parsedData = JSON.parse(data)
            const stringData = JSON.stringify(data);
            res.send(data);
        });
    });
});

app.listen(process.env.PORT || 3000, () => {
    console.log("Server started on port 3000");
});
