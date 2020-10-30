const mongoose = require('mongoose');

const Collection = require('./models/collection');
const Set = require('./models/set');

//this is not duplicative of the code on server.js - this is an entirely separate file 
const mongoURI = 'mongodb://localhost:27017/'+ 'Project2';
mongoose.connect(
    mongoURI,
    {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true,
    },
    ()=> {
        console.log('the connection with mongod is established');
    }
);

Collection.findOne({ name: 'My Collection' })
  .populate('sets') // <- pull in ingredient data
  .exec((err, collection) => {
    console.log(collection);
    if (err) {
      return console.log(err);
    }
    if (collection.sets.length > 0) {
      console.log(`I love ${collection.name} for the ${collection.sets[0].name}`);
    } else {
      console.log(`${collection.name} has no ingredients.`);
    }
    console.log(`what was that food? ${collection}`);
  });