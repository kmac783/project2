const router = require('express').Router();
const Lego = require('../models/lego');
const Set = require('../models/set');
const { route } = require('./setsController');



// 3 Index of My Legos Sets (/legos/mylegos)
router.get('/mylegos', async (req, res) => {
    //console.log('/mylegos');
    let myLegos = await Lego.findOne({ name: "My Legos" }).populate('sets');
    //console.log(`found and populated all collections: ${myLegos}`);
    //res.send(legos);
    res.render('legos/index.ejs', { myLegos });
});

// 3a Index of My Wishlist sets (/legos/mywishlist)
router.get('/mywishlist', async (req, res) => {
    //console.log('/mywishlist');
    let myWishlist = await Lego.findOne({ name: "My Wishlist" }).populate('sets');
    //console.log(`found and populated all collections: ${myWishlist}`);
    //res.send(legos);
    res.render('wishes/index.ejs', { myWishlist });
});




// 1 New Legos Collection - Form (will rarely be used to create new collections)
router.get('/mylegos/new', (req, res) => {
    res.render('legos/new.ejs');

});

// 2 Create new Legos Collection (see above will rarely be used as it creates a new collection of legos)
router.post('/', async (req, res) => {
    let myLegos = await Lego.create(req.body);
    //console.log(myLegos);
    res.redirect('/legos/${myLegos:id}');
});


// 4 SHOW a Set for My Legos
router.get('/mylegos/:id', async (req, res) => {
    let myLego = await Lego.findOne({ name: "My Legos" });
    //console.log(lego);
    let set = await Set.findById(req.params.id)
        
    //res.send(req.params.set);
    res.render('sets/show', { myLego, set });
});




// 6 EDIT FORM page set up Route
router.get('/mylegos/:setId/edit', async (req, res) => {
    const setId = req.params.setId;
    //console.log(setId);
    let myLego = await Lego.findOne({ name: "My Legos" })
    //console.log(myLego);
    let foundSet = await Set.findById(setId).populate({
        path: 'sets',
    });
    console.log(foundSet);
    //res.send({myLego, foundSet});
    res.render('sets/edit.ejs', { set: foundSet });
});



// 7 DELETE ROUTE - removing a set from my legos collection
router.post("/mylegos/:setId", async (req, res)=> {
    await Set.findByIdAndDelete(req.params.setId, (error)=>{
        res.redirect("/legos/mylegos/");
    });
});



// 5 PUT ROUTE adding the edit changes to the set 
router.put('/mylegos/:setId', async (req, res) => {
    //console.log("PUT ROUTE");
    let setId = req.params.setId;
    //console.log({setId});
    console.log(req.body);
    let foundSet = await Set.findByIdAndUpdate(setId, req.body, (err)=>{
        if (err) res.send(err);
        
    })
    //res.send(foundSet);
    res.redirect(`/legos/mylegos/${foundSet._id}`);
    });



module.exports = router;