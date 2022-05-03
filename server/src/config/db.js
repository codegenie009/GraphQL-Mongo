require('dotenv').config();
const mongoose = require('mongoose');

const DB_URL = process.env.DB_URL;
const connectDB = () => {
    return mongoose.connect(DB_URL, {useUnifiedTopology: true, useNewUrlParser: true}, err => {
        if (err){
            console.error('Connection to DB failed');
        } else{
            console.log('Connection to DB was successful');
        }
    })
}

const db = mongoose.connection;

db.on('error', console.error.bind(console, "MongoDB connection failed"));

module.exports = connectDB;
