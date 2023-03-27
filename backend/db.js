const mongoose = require('mongoose');


const mongoURI = "mongodb://127.0.0.1:27017/mNotebook";
mongoose.set('strictQuery', false);
const connectToMongo=async()=>{
    await mongoose.connect(mongoURI);
    console.log("connected");
}

module.exports = connectToMongo