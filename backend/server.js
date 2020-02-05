
import "babel-polyfill";
var express = require('express');
var bodyParser = require('body-parser');
var http = require('http');
var app = express();
var path = require('path');
const {MongoClient} = require('mongodb');

async function main (){
  const uri = "mongodb+srv://<userName>:<password>@forecast-97wnn.mongodb.net/test?retryWrites=true&w=majority";

  const client = new MongoClient(uri,{ useNewUrlParser: true, useUnifiedTopology: true });
  // connecting to the client returns a Promise
  try{
      await client.connect();
      console.log("MongoDB Connected...")
      await listDatabases(client);
  }catch(e){
    console.log(e);
  }finally{
    await client.close();
  }
}

//call the main 
main().catch(console.err);
async function listDatabases(client){
  const dbList = await client.db().admin().listDatabases();
  console.log("Databases:");
  dbList.databases.forEach(db => console.log(` - ${db.name}`));
};



const PORT = process.env.PORT || 5000;
app.use('/',function(req,res){
  res.send('Connection made!');
});
//app.get('/', (req,res) => res.render("../ForecastChannel/src/app/components/main/main.component.html"));
app.listen(PORT, () =>console.log(`Server started on port ${PORT}`));