const express = require('express')
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const config = require('./config');

app.use(bodyParser.json());

async function startServer() {
    try {
        await mongoose.connect(config.BD_URL,{ useNewUrlParser: true, useUnifiedTopology: true });// подлюкчение к бд

        app.listen(config.PORT, console.log("Server start on http://localhost:"+config.PORT+'/'));

    } catch(e) {
        console.log("Error for starting server: ", e )
    }
}

const routs = require("./router/routs.js");
app.use('/api/post', routs);


startServer();

