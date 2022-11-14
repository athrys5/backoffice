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

router.post('/deletepet', async (req,res) =>{
    try {
        await Animals.deleteMany({ email: req.body.email1 , name: req.body.name1})
        res.redirect('/myanimals')
    } catch  { }
})

router.post('/modifypet', async(req, res) => {
    try{
        const filter = {email: req.body.email2 , name: req.body.name2}
        const options = { upsert: false };
        const updateDoc = {
            $set: {
                email: req.body.email2,
                name: req.body.name2,
                gender: req.body.gender,
                breed: req.body.breed,
                height: req.body.height,
                length: req.body.length,
                age: req.body.age
            },
        };
        await Animals.updateMany(filter, updateDoc, options)
        res.redirect('/myanimals')
      }catch{
        res.redirect('/error')
        console.error()
      }
})


module.exports = router
