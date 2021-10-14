const mongoose = require('mongoose')

var uri = "mongodb://127.0.0.1:27017/portfolio"
mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true });

const connection = mongoose.connection;


// Connect to the MongoDB cluster
connection.once("open", function () {
    console.log("Database Connection Established Successfully..");
});

