var express = require("express");
var path = require("path");

const app = express();
var PORT = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const tables = [
    {
        name: 'Jack Johnson',
        phone: 9999999999,
        email: 'example@email.com',
        uniqueID: '007'
    }
];
const waitingList = [
    {
        name: 'Jack Johnson',
        phone: 9999999999,
        email: 'example@email.com',
        uniqueID: '007'
    }
];

app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "home.html"));
});

app.get("/add", function(req, res) {
    res.sendFile(path.join(__dirname, "table.html"));
});

app.get("/add", function(req, res) {
    res.sendFile(path.join(__dirname, "reserve.html"));
});

app.get("/api/tables", function(req, res) {
return res.json(tables);
});  

app.post("/api/tables", function(req, res) {
    var newTable = req.body;
  
    console.log(newTable);
  
    tables.push(newTable);
  
    res.json(newTable);
});

app.get("/api/waitingList", function(req, res) {
    return res.json(waitingList);
});


app.post("/api/waitingList", function(req, res) {
    var newWaiting = req.body;

    console.log(newWaiting);

    waitingList.push(newWaiting);

    res.json(newWaiting);
});

app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
});