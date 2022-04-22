const express = require('express');
const cors = require('cors')
require('dotenv').config();
const app = express();

const PORT = process.env.PORT || 5000;

//middlewere 
app.use(cors())
app.use(express.json());

app.get('/',(req,res)=>{
    res.send('home')
})
app.listen(PORT,()=>{
    console.log(`server running ${PORT}`)
})
