const router = require('express').Router();
const Collection = require('../models/collection');
const Set = require('../models/set');

// 1 New Collection Form
router.get('/new', (req,res)=> {
    res.render('collections/new.ejs');

});

// 3 Index of Collection's sets
router.get('/mylegos', async (req,res)=> {
    console.log('/mylegos');
    let myLegos = await Collection.findOne({name:"My Legos"}).populate('sets');
    console.log(`found and populated all collections: ${myLegos}`);
    //res.send(collection);
    res.render('collections/index.ejs', { myLegos });
});






// 4 SHOW a COllection and Update w/ Additional Sets
router.get('/:id', async (req, res)=> {
    let sets = await Set.find();
    let collection = await (await Collection.findById(req.params.id)).populate('sets');
    res.render('/collections/show.ejs', {collection, sets});

});
router.post('/:collectionId/sets', async (req, res)=> {
    let foundCollection = await Collection.findByIdAndUpdate(
        req.params.collectionId,
        {
            $push: {
                sets: req.body.sets,
            },
        },
        {new: true, upset: true}
    );
    console.log(foundCollection);
    res.redirect(`/collections/${foundCollection.id}`);
});

// 2 Create new Collection
router.post('/', async (req, res)=> {
    let collection = await Collection.create(req.body);
    res.redirect('/collections/${collections:id}');
});

module.exports = router;