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

// //5 Updating a set 
// router.post('/sets/', async (req, res)=> {
//     console.log(req.params.mySetId);
//     let foundSet = await Set.findByIdAndUpdate(
//         req.params.mySetId,        
//         {
//             $push: {
//                 sets: req.body.sets,
//             },
//         },
//         {new: true, upset: true}
//     );
//     console.log(foundSet);
//     res.redirect(`/mylegos/${foundSet.id}`);
// });

module.exports = router;