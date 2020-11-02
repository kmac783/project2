const mongoose = require('mongoose');

const Lego = require('./models/lego');
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
(async function () {
    const frozen = await Set.create({
        name: "Elsa's Castle",
    });
    const beauty = await Set.create({
        name: "Belle's Castle",
    });
    const arandelle = await Set.create({
        name: "Arendelle",
    });
    const myLego = new Lego ({
        name: 'My Legos',
        sets: [],
    });
    myLego.sets.push(frozen);
    myLego.sets.push(beauty);
    myLego.sets.push(arandelle);
    myLego.save(function (error, savedmyLego){
        if (error) {
            console.log(error);
        } else {
            console.log('myCollection list is', savedmyLego);
        }
    });
})();