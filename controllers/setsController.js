const router = require('express').Router();
const Lego = require('../models/lego.js');
const Set = require('../models/set.js');

// Set Index route
router.get('/', (req,res)=>{
    console.log('/sets');
    Set.find({}, (error, set)=> {
        res.render('sets/index.ejs', {sets:set});
    });  
});

// 1 New Set Form
router.get('/new', (req, res)=> {
    res.render('sets/new.ejs');
});

// 2 Create New Set
router.post('/', async (req,res) => {
    if(req.body.setComplete === "on") {
        req.body.setComplete = true;
    } else {
        req.body.setComplete = false;
    };
    let newSet = await Set.create(req.body);
    let myLegos = await Lego.findOne({name:"My Legos"});
    myLegos.sets.push(newSet);
    await myLegos.save();  
    //res.send(newSet);
    res.redirect('/legos/mylegos');
});

module.exports = router;