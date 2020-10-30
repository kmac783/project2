const router = require('express').Router();
const Set = require('../models/set.js');


// 1 New Set Form
router.get('/new', (req, res)=> {
    res.render('sets/new.ejs');
});

// 2 Create New Set
router.post('/', async (req,res) => {
    try {
        let newSet = await Set.create(req.body);
        res.send(newSet);

    } catch (error) {
        res.send(error);
    }
});

module.exports = router;