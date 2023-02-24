const mongoose = require('mongoose');
const mongoURI = process.env.DATABASE;  //database connection string
require('dotenv').config()

mongoose.set("strictQuery", false);//for removing warning

const connectToMongo = () => {
   // mongoose.connect(process.env.MONGO_CONNECTION,{useNewUrlParser:true},)
   mongoose.connect(mongoURI,{useNewUrlParser:true},()=>{
    console.log("Connected to Mongo Successfully...");
   })
}
module.exports = connectToMongo;
 
  