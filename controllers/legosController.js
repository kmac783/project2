const router = require('express').Router();
const Lego = require('../models/lego');
const Set = require('../models/set');

// 3 Index of Collection's sets
router.get('/mylegos', async (req,res)=> {
    console.log('/mylegos');
    let myLegos = await Lego.findOne({name:"My Legos"}).populate('sets');
    console.log(`found and populated all collections: ${myLegos}`);
    //res.send(legos);
    res.render('legos/index.ejs', { myLegos });
});

// 1 New Legos Form
router.get('/mylegos/new', (req,res)=> {
    res.render('legos/new.ejs');

});

// 2 Create new Legos
router.post('/', async (req, res)=> {
    let myLegos = await Lego.create(req.body);
    res.redirect('/legos/${myLegos:id}');
});
// //create a new lego set
// router.get('/:setId',(req,res)=>{
//     Set.findById(req.params.setId, (error, set)=>{
//         res.render('sets/show.ejs',{set});
//     });
// });

// SHOW /mylegos show page to display sets detail 
router.get('/mylegos/:id', async (req,res)=>{
    let allLegoSets = await Set.find({});
    console.log(allLegoSets);
    let foundLegoSet = await Lego.findById(req.params.id).populate('sets');
    console.log('/mylegos/:id');
    console.log(foundLegoSet);
    let setsForMyLegos = allLegoSets.filter((set) =>{
        if (!foundLegoSet.set.map((mylegos)=> mylegos.id).includes(set.id)) {
            return set;
        };
    });
    console.log(setsForMyLegos);
    res.send(setsForMyLegos);
    // res.render('/legos/show.ejs', {
    //     legos: foundLegoSet, 
    //     sets: setsForMyLegos, 
    // });

});




// // 4 SHOW a COllection and Update w/ Additional Sets
// router.get('/:id', async (req, res)=> {
//     let sets = await Set.find();
//     let legos = await (await Lego.findById(req.params.id)).populate('sets');
//     res.render('/legos/show.ejs', {legos, sets});

// });
// router.post('/:legoId/sets', async (req, res)=> {
//     let foundLego = await Lego.findByIdAndUpdate(
//         req.params.legoId,
//         {
//             $push: {
//                 sets: req.body.sets,
//             },
//         },
//         {new: true, upset: true}
//     );
//     console.log(foundLego);
//     res.redirect(`/legos/${foundLego.id}`);
// });



module.exports = router;