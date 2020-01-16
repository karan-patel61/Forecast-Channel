
var express = require('express');
var bodyParser = require('body-parser');
var http = require('http');
var app = express();
var path = require('path');
app.use(express.static(__dirname+"../ForecastChannel/src/app/components/main"));
// const router = express.Router();
// var cors = require('cors');
// app.use(cors());





//DATABASE Config
//Connect to MongoDB

const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://student:<password>@forecastchannel-97wnn.mongodb.net/test?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true });
client.connect(err => {
  if(!err){
    console.log("MongoDB Connected...");
  }
  else{
    console.log(JSON.stringify(err));
  }
  const collection = client.db("test").collection("devices");
  // perform actions on the collection object
  client.close();
});




const PORT = process.env.PORT || 5000;
app.use('/',function(req,res){
  res.send('Connection made!');
});
//app.get('/', (req,res) => res.render("../ForecastChannel/src/app/components/main/main.component.html"));
app.listen(PORT, () =>console.log(`Server started on port ${PORT}`));