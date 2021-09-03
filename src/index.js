const express = require ('express');
const path = require ('path');
const mongoose = require('mongoose');
const router = require('./routes/index');
const app = express();

mongoose.connect('mongodb://localhost/express-pagination')
    .then( () => console.log('DB connected'))
    .catch((err) => {
        console.log('Error to connect to DB ->', err);
    });

// Settings
app.set('port', process.env.PORT || 3000 );
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: false })); 

// Routes
app.use(router); 


// Static Files

// Server
app.listen(app.get('port'), () => {
    console.log('Running on port', app.get('port'));
});