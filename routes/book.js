const express = require('express')
const router = express.Router()
const Book = require('../models/services')
const bodyParser = require('body-parser');
router.use(bodyParser.json()); // for parsing application/json
router.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

router.get('/book', async (req, res) =>{
    try{  
        const list = await Book.find({});
        res.render('book.ejs', { data: list })
    }catch{ 
    }
})

router.post('/selectname', async (req, res) => {
    try {
        const result = await Book.find({ name: req.body.name })
        res.render('book.ejs', { data: result })
    } catch (error) {
        
    }
})

router.post('/book', async (req, res) => {
    try {
        const newdate = new Date(req.body.booking)
        const filter = { name: req.body.site }
        const options = { upsert: false }
        const updateDoc = {
            $push: {
                [`resDog.${req.body.numResDog - 1}`]: {'date': newdate.toISOString(), 'id': 'ciao@gmail.com'},
            }
        }
        await Book.updateMany(filter, updateDoc, options);
        res.redirect('/book')
    } catch (error) {
        
    } 
})

module.exports = router