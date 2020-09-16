var express = require("express");
var path = require("path");

const app = express();
var PORT = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const tables = [
    {
        routeName: 'jackjohnson',
        name: 'Jack Johnson',
        phone: 9999999999,
        email: 'ha@no.com',
        uniqueID: 'hahahahaha'
    }
];
const waitingList = [
    {
        routeName: 'jackjohnson',
        name: 'Jack Johnson',
        phone: 9999999999,
        email: 'ha@no.com',
        uniqueID: 'hahahahaha'
    }
];

app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "view.html"));
});

app.get("/add", function(req, res) {
    res.sendFile(path.join(__dirname, "add.html"));
});

app.get("/api/tables", function(req, res) {
return res.json(tables);
});  

app.get("/api/tables/:tableID", function(req, res) {
    var chosen = req.params.tableID;
  
    console.log(chosen);
  
    for (var i = 0; i < Tables.length; i++) {
      if (chosen === Tables[i].routeName) {
        return res.json(Tables[i]);
      }
    }
  
    return res.json(false);
});

app.post("/api/tables", function(req, res) {
    var newTable = req.body;
  
    newTable.routeName = newTable.name.replace(/\s+/g, "").toLowerCase();
  
    console.log(newTable);
  
    Tables.push(newTable);
  
    res.json(newTable);
  });

app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
});