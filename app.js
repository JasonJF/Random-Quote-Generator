//Setup
let express = require("express");
let app = express();

app.use(express.urlencoded({extended: true}));
app.use(express.static("public"));

//Home Route
app.get("/", (req,res) => {
    res.sendFile(__dirname + "/index.html");
});

app.listen(3000, () => {
    console.log("Server started on port 3000");
})
