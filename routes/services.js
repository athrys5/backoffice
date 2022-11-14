const express = require('express')
const router = express.Router()
const Site = require('../models/services')
const bodyParser = require('body-parser');
router.use(bodyParser.json()); // for parsing application/json
router.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded


router.get('/services', async (req, res) =>{
    try{  
        const list = await Site.find({});
        res.render('services.ejs', { data: list })
    }catch{ 
    }
})

router.post('/addSite', async (req, res) => {
    try{
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

router.post('/deletesite', async (req, res) =>{
    try {
        await Site.deleteMany({ name: req.body.name1})
        res.redirect('/services')
    } catch  { }
})

router.post('/modifysite', async(req, res) => {
    try {
        const filter = { name: req.body.name2 }
        const options = { upsert: false };
        const updateDoc = {
            $set: {
                name: req.body.name2,
                city: req.body.city2,
                'VetInfo.maxheight': req.body.maxheight,
                'VetInfo.maxlength': req.body.maxlength,
            },
        };
        console.log(updateDoc)
        await Site.updateMany(filter, updateDoc, options)
        res.redirect('/services')
    } catch (error) {
        
    }
})

router.post('/adddog', async(req, res) => {
    try {
        const result = await Site.find({name: req.body.name3})
        if(result[0].resDog.length == 0){
            const filter = { name: req.body.name3 }
            const options = { upsert: false };
            const updateDoc = {
                $push: {
                    resDog: [],
                    services: 'DogSitter',
                },
            };
            await Site.updateMany(filter, updateDoc, options);
        }else{
            const filter = { name: req.body.name3 }
            const options = { upsert: false };
            const updateDoc = {
                $push: {
                    resDog: [],
                },
            };
            await Site.updateMany(filter, updateDoc, options);
        }
        res.redirect('/services')
    } catch (error) {
        
    }
})

router.post('/addvet', async(req, res) => {
    try {
        const result = await Site.find({name: req.body.name3})
        if(result[0].resVet.length == 0){
            const filter = { name: req.body.name3 }
            const options = { upsert: false };
            const updateDoc = {
                $push: {
                    resVet: [],
                    services: 'Veterinarian',
                },
                $set: {
                    'VetInfo.maxheight': req.body.maxheight2,
                    'VetInfo.maxlength': req.body.maxlength2,
                },
            };
            await Site.updateMany(filter, updateDoc, options);
        }else{
            const filter = { name: req.body.name3 }
            const options = { upsert: false };
            const updateDoc = {
                $push: {
                    resVet: [],
                },
            };
            await Site.updateMany(filter, updateDoc, options);
        }
        res.redirect('/services')
    } catch (error) {
        
    }
})

module.exports = router