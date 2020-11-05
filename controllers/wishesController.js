const router = require('express').Router();
const Lego = require('../models/lego.js');
const Set = require('../models/set.js');



// 1a New Wishlist Set Form
router.get('/new', (req, res)=> {
    res.render('wishes/new.ejs');
});
// 2a Create New Set for My Wishlist
router.post('/', async (req,res) => {
    if(req.body.setComplete === "on") {
        req.body.setComplete = true;
    } else {
        req.body.setComplete = false;
    };
    if(req.body.instructionBooklet === "on") {
        req.body.instructionBooklet = true;
    } else {
        req.body.instructionBooklet = false;
    };
    let newSet = await Set.create(req.body);
    let myWishList = await Lego.findOne({name:"My Wishlist"});
    myWishList.sets.push(newSet);
    await myWishList.save();  
    //res.send(newSet);
    res.redirect('/legos/mywishlist');
});

// 4a SHOW a Set for My WishList
router.get('/mywishlist/:id', async (req, res) => {
    let myWishlist = await Lego.findOne({ name: "My Wishlist" });
    //console.log(myWishlist);
    let set = await Set.findById(req.params.id);
    //console.log(set);
    //res.send(req.params.set);
    res.render('wishes/show', { myWishlist, set });

});

module.exports = router;