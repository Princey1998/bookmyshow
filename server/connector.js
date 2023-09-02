const mongodb = require('mongodb');

const mongoURI = "mongodb+srv://princeyadv1:GTYBQrU884Dxv7h7@cluster0.lhupsjn.mongodb.net/?retryWrites=true&w=majority"

let mongoose = require('mongoose');
//  Importing Mongoose Schema from schema.js
const { bookMovieSchema } = require('./models/schema')


mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => { console.log("connection established with mongodb server online"); })
    .catch(err => {
        console.log("error while connection", err)
    });
let collection_connection = mongoose.model('bookmovietickets', bookMovieSchema)


exports.connection = collection_connection;
