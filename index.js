require('dotenv').config();
const cors = require('cors');
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const app = express();

//mongoose connection to database
mongoose.Promise = global.Promise;
mongoose.connect('mongodb+srv://admin:belegosT99@cluster0-svopf.mongodb.net/Imparatus?retryWrites=true&w=majority', {
   useNewUrlParser: true,
   useUnifiedTopology: true
}).then(() => {
    console.log("Successfully connected to the database");
}).catch(error => {
    console.log("Could not connect to the database. Exiting now...", error);
    process.exit();
});

//require cors
app.use(cors());

//bodyparser setup
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
//require routes
const routes = require('./src/routes/crmRoutes');
routes(app);

//starting the server
app.get('/', (req, res) => {
    res.json({ "message": "Imparatus API"});
});

// Launch our app on port
app.listen(process.env.PORT, () => 
    console.log(`Your server is runing on port ${process.env.PORT}`)
 );
