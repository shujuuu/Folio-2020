//Before anything else
//set up node package with npm init
//install all dependencies needed in terminal, run ->>>>>> npm install express ejs express-ejs-layouts

//in package.json, create scripts to run our server
//example ->>>>>>> "start": "node server.js", "dev": "nodemon server.js"
//in terminal, run ->>>>> npm run dev


//3B, Hooking up MongoDB
//check if in production environment
//if yes, load all variables from .env file and import it to the process
if (process.env.NODE_ENV !== 'production') {
    require('dotenv').config()
}




//1A: Setting up Express, include the libraries
const express = require('express');
const app = express();
const expressLayouts = require('express-ejs-layouts');

//2B: set up route to let pages know where to go
//require takes relative path
const indexRouter = require('./routes/index');
const worksRouter = require('./routes/works');
const aboutRouter = require('./routes/about');

//1B: Setting up Express, set view engine, in this case, use ejs
app.set('view engine', 'ejs')

//also set where our views are coming from
//views = get current directory + views folder(all different views should be stored here)
app.set('views', __dirname + '/views')

//hook up express layouts, what are layout is gonna be, common html
app.set('layout', 'layouts/layout')

//tell to use express layout
app.use(expressLayouts)

//where our public is gonna be, css,js,img
app.use(express.static('public'))




//3A: Hooking up MongoDB
//install mondo db into our library, in terminal, run ->>>> npm i mongoose, require it
const mongoose = require('mongoose');
//set our connection for our database
//connect()-> put url inside parenthesis for our connection, never hard code this connection
//parameter dependent on environment
//when developing connect with local mongoDB server, when deployed connects mongoDB server to a web somewhere
//1st param = string for URL(environment variables), 2nd param = options of how we want to setup mondo db we want to setup in our app
// mongoose uses older way to acces database in mongoDB(currently deprecated)
mongoose.connect(process.env.DATABASE_URL, {
    useNewUrlParser: true
    // useUnifiedTopology: true
})
const db = mongoose.connection
db.on('error', error => console.error(error));
db.once('open', () => console.log('Connected to Mongoose'));
//note: will crash when run, application doesnt have varaiable -> DATABASE_URL
//solution: use library .env to load environment var into application
//in terminal, run ->>>>>>> npm i --save-dev dotenv
//create .env in project root, inside this file put different variables
//then tell application to load the .env file, put at the top of this page





//2B: set up route to let pages know where to go
//for larger website, put routes in another file
//controller = routes
//2parameter, 1st = prepend with this, 2nd = every route inside
app.use('/', indexRouter)
app.use('/works', worksRouter)
app.use('/about', aboutRouter)

//1C: Setting up Express, tell app to listen to certain ports
//process.env.PORT = pull from environment variable from when we deploy
//tell it to use port 3000
app.listen(process.env.PORT || 3000)

//models = all the database models are gonna begin with