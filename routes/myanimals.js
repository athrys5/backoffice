const express = require('express')
const router = express.Router()
const Animals = require('../models/myanimals')
const bodyParser = require('body-parser');
router.use(bodyParser.json()); // for parsing application/json
router.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

router.get('/myanimals', async (req, res) =>{
    try{  
        const list = await Animals.find({});
        res.render('myanimals.ejs', { data: list })
    }catch{ }
})

router.post('/deleteanimal', async (req,res) =>{
    try {
        await Animals.deleteMany({ name: req.body.text})
        res.redirect('/myanimals')
    } catch  { }
})

module.exports = router
