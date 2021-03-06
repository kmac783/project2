//___________________
//Dependencies
//___________________
const express = require('express');
const methodOverride  = require('method-override');
const expressLayouts = require('express-ejs-layouts');
const mongoose = require ('mongoose');
const Lego = require('./models/lego');
const app = express ();
const db = mongoose.connection;
//___________________
//Port
//___________________
// Allow use of Heroku's port or your own local port, depending on the environment
const PORT = process.env.PORT || 3000;
//___________________
//Database
//___________________
// How to connect to the database either via heroku or locally
const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017/'+ 'Project2';
// Connect to Mongo
mongoose.connect(MONGODB_URI ,  { useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true,});
// Error / success
db.on('error', (err) => console.log(err.message + ' is Mongod not running?'));
db.on('connected', () => console.log('mongo connected: ', MONGODB_URI));
db.on('disconnected', () => console.log('mongo disconnected'));
// open the connection to mongo
db.on('open' , ()=>{});
//___________________
//Middleware
app.set('view engine', 'ejs')

//___________________
//use public folder for static assets
app.use(express.static('public'));

// populates req.body with parsed info from forms - if no data from forms will return an empty object {}
app.use(express.urlencoded({ extended: false }));// extended: false - does not allow nested objects in query strings
app.use(express.json());// returns middleware that only parses JSON - may or may not need it depending on your project
//use method override
app.use(methodOverride('_method'));// allow POST, PUT and DELETE from a form
app.use(expressLayouts);
//___________________
// Routes
app.use('/sets', require('./controllers/setsController'));
app.use('/legos', require('./controllers/legosController'));
//___________________
//localhost:3000
// HOME INDEX
app.get('/', async (req,res)=> {
  // console.log('/');
  // res.send("Find the Legos!");
  let legos = await Lego.find();
  // console.log(`found and populated all collections: ${legos}`);
  // res.send(legos);
  res.render('home.ejs', {legos});
});

//___________________
//Listener
//___________________
app.listen(PORT, () => console.log( 'Listening on port:', PORT));