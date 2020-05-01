const express = require ('express');

//after importing express we call creating the variable for the routes
const routes = require('./routes');
const app = express();
const PORT = process.env.PORT || 3001;

//Middleware for the application
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
//creating static information for heroku
if (process.env.NODE_ENV === 'production') {
    app.use(express.static('client/build'));
}

//adding routes for views
app.use(routes);

//Start the server
app.listen(PORT, function() {
    console.log(`API Server now listening on PORT ${PORT}`);
});