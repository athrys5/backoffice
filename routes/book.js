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
        console.log(result)
        res.render('book.ejs', { data: result })
    } catch (error) {
        
    }
})

module.exports = router