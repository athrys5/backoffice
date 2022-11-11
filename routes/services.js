const express = require('express')
const router = express.Router()
const Site = require('../models/services')
const bodyParser = require('body-parser');
router.use(bodyParser.json()); // for parsing application/json
router.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded


router.get('/services', (req, res) => {
    res.render('services.ejs')
})

router.post('/addSite', async (req, res) => {
    try{
        console.log(req.body)
        if(req.body.DogSitter == 'DogSitter' && req.body.Veterinarian == 'Veterinarian'){
            await Site.insertMany({
                city: req.body.city, 
                services:['DogSitter', 'Veterinarian'], 
                resDog: [[]], 
                name: req.body.name, 
                resVet: [[]], 
                VetInfo: {"maxheight":req.body.maxheight, "maxlength": req.body.maxlength}})
        }else{
            if(req.body.DogSitter == 'DogSitter'){
                await Site.insertMany({
                    city: req.body.city, 
                    services:['DogSitter'], 
                    resDog: [[]],
                    name: req.body.name,
                })
            }else{
                await Site.insertMany({
                    city: req.body.city, 
                    services:['Veterinarian'], 
                    name: req.body.name,
                    resVet: [[]], 
                    VetInfo: {"maxheight":req.body.maxheight, "maxlength": req.body.maxlength}
                })
            }
        }
        res.redirect('/services')
    }catch(error){
        res.redirect('/')
    }
})

module.exports = router