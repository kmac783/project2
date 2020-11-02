const router = require('express').Router();
const Lego = require('../models/lego');
const Set = require('../models/set');

// 3 Index of My Legos Sets (/legos/mylegos)
router.get('/mylegos', async (req,res)=> {
    //console.log('/mylegos');
    let myLegos = await Lego.findOne({name:"My Legos"}).populate('sets');
    //console.log(`found and populated all collections: ${myLegos}`);
    //res.send(legos);
    res.render('legos/index.ejs', { myLegos });
});

// 1 New Legos Form (will rarely be used identifies new collections to be created)
router.get('/mylegos/new', (req,res)=> {
    res.render('legos/new.ejs');

});

// 2 Create new Legos (see above will rarely be used as it creates a new collection of legos)
router.post('/', async (req, res)=> {
    let myLegos = await Lego.create(req.body);
    //console.log(myLegos);
    res.redirect('/legos/${myLegos:id}');
});

// 4 SHOW a Set
router.get('/mylegos/:id', async (req, res)=> {
    let myLego = await Lego.findOne({name: "My Legos"});
    //console.log(lego);
    let set = await Set.findById(req.params.id);
    console.log(set);
    //res.send(req.params.set);
    res.render('sets/show', {myLego, set});

});

// router.post('/legoId/sets', async (req, res)=> {
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