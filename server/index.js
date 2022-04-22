const express = require('express');
const { MongoClient, ServerApiVersion } = require('mongodb');
const cors = require('cors')
require('dotenv').config();
const app = express();

const PORT = process.env.PORT || 5000;

//middlewere 
app.use(cors())
app.use(express.json());


const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.gtyxm.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`;
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
client.connect(err => {
  const collection = client.db("test").collection("devices");
  console.log('ginious cardb connected')
  // perform actions on the collection object
  client.close();
});


app.get('/',(req,res)=>{
    res.send('home')
})
app.listen(PORT,()=>{
    console.log(`server running ${PORT}`)
})
