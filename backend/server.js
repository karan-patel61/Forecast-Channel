const express = require('express');
const app = express();
const router = express.router;
app.


//DATABASE Config
//Connect to MongoDB

const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb://student:<password>@forecastchannel-shard-00-00-97wnn.mongodb.net:27017,forecastchannel-shard-00-01-97wnn.mongodb.net:27017,forecastchannel-shard-00-02-97wnn.mongodb.net:27017/test?ssl=true&replicaSet=ForecastChannel-shard-0&authSource=admin&retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true });
client.connect(err => {
  const collection = client.db("weather_data").collection("city");
  // perform actions on the collection object
  console.log(collection);
  client.close();
});

app.get('/', (req,res) => res.render("../Forecast-Channel/src/app/components/main/main.component.html"));
const PORT = process.env.PORT || 5000;
app.listen(PORT, console.log(`Server started on port ${PORT}`));