const mongoose = require('mongoose');

var mongoURL = "mongodb+srv://hari:Shari2005@craveio.dn2ag.mongodb.net/craveio";

mongoose.connect(mongoURL, {useUnifiedTopology: true, useNewUrlParser: true});

var db = mongoose.connection;

db.on('connected', () => {
    console.log('MongoDB Connection Successful');
});

db.on('error', () => {
    console.log('MongoDB Connection Failed');
});

module.exports = db;
