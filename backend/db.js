const mongoose = require('mongoose');


const mongoURI = "mongodb://127.0.0.1:27017/mNotebbok";

const connectToMongo=async()=>{
    await mongoose.connect(mongoURI);
    console.log("connected");
}

module.exports = connectToMongo