if(process.env.NODE_ENV !== 'production'){
    require('dotenv').config()
}
const mongoose = require('mongoose');

const MONGO  = process.env.MONGO_URI
mongoose.set('strictQuery', false);
const connectToMongo=async()=>{
    await mongoose.connect(MONGO);
    console.log("connected");
}

module.exports = connectToMongo