const express = require('express')
const router = express.Router()
const Users = require('../models/customer')
const bodyParser = require('body-parser');
router.use(bodyParser.json()); // for parsing application/json
router.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

router.get('/customers', async (req, res) =>{
    try{  
        const list = await Users.find({});
        res.render('customers.ejs', { data: list })
    }catch{ }
})

router.post('/deleteuser', async (req,res) =>{
    try {
        await Users.deleteMany({ email: req.body.text})
        res.redirect('/customers')
    } catch  { }
})

module.exports = router