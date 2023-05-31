const express = require('express')
const app = express();
const cors = require('cors');
const mongoose = require('mongoose')
require('dotenv').config()
app.use(cors())
app.use(express.urlencoded({limit: "200mb",extended:true}));
app. use(express. json({limit: '200mb'}));
const PORT  = process.env.PORT || 5000
const URI  = process.env.MONGODB_URI
mongoose.set('strictQuery', false)

const connection = async()=>{
  try {
    const connection_try = await mongoose.connect(URI)
    console.log("connection to mongoose was sucessful");
  } catch (error) {
    console.log(error)
  }
}

connection();
app.listen(PORT, ()=>{
    console.log(`app is runningat PORT: ${PORT}`)
})