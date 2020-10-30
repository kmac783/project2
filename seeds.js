const mongoose = require('mongoose');

const Collection = require('./models/collection');
const Set = require('./models/set');

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
    const myCollection = new Collection ({
        name: 'My Collection',
        sets: [],
    });
    myCollection.sets.push(frozen);
    myCollection.sets.push(beauty);
    myCollection.sets.push(arandelle);
    myCollection.save(function (error, savedMyCollection){
        if (error) {
            console.log(error);
        } else {
            console.log('myCollection list is', savedMyCollection);
        }
    });
})();