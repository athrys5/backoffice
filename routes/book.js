const express = require('express')
const router = express.Router()
const Book = require('../models/services')
const Users = require('../models/customer')
const bodyParser = require('body-parser');
router.use(bodyParser.json()); // for parsing application/json
router.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

router.get('/book', async (req, res) =>{
    try{  
        const list = await Book.find({});
        const result = await Users.find({})
        res.render('book.ejs', { data: list , account: result})
    }catch{ 
    }
})

router.post('/book', async (req, res) => {
    try {
        const result = await Book.find({ name: req.body.name })
        const list = await Users.find({})
        res.render('book.ejs', { data: result, account: list })
    } catch (error) {
        
    }
})

router.post('/booking', async (req, res) => {
    try {
        const newdate = new Date(req.body.booking)
        const filter = { name: req.body.site }
        const options = { upsert: false }
        const updateDoc = {
            $push: {
                [`resDog.${req.body.numResDog - 1}`]: {'date': newdate.toISOString(), 'id': req.body.usere},
            }
        }
        await Book.updateMany(filter, updateDoc, options);
        res.redirect('/book')
    } catch (error) {
        
    } 
})

router.post('/deletebooking', async (req, res) => {
    try {
        const filter = { name: req.body.sitedel }
        var fields = req.body.deletedate.split(', ')
        fields[2] = parseInt(fields[2]) - 1
        const options = { upsert: false }
        const updateDoc = {
            $pull: {
                [`resDog.${fields[2]}`]: {'date': fields[1], 'id': fields[0]},
            }
        }
        await Book.updateMany(filter, updateDoc, options)
        res.redirect('/book')
    } catch (error) {
        
    }
})

router.post('/bookingvet', async (req, res) => {
    try {
        const newdate = new Date(req.body.bookingv)
        const filter = { name: req.body.sitev }
        const options = { upsert: false }
        const updateDoc = {
            $push: {
                [`resVet.${req.body.numResVet - 1}`]: {'date': newdate.toISOString(), 'id': req.body.userv},
            }
        }
        await Book.updateMany(filter, updateDoc, options);
        res.redirect('/book')
    } catch (error) {
        
    } 
})

router.post('/deletebookingvet', async (req, res) => {
    try {
        const filter = { name: req.body.sitedelv }
        var fields = req.body.deletedatev.split(', ')
        fields[2] = parseInt(fields[2]) - 1
        const options = { upsert: false }
        const updateDoc = {
            $pull: {
                [`resVet.${fields[2]}`]: {'date': fields[1], 'id': fields[0]},
            }
        }
        await Book.updateMany(filter, updateDoc, options)
        res.redirect('/book')
    } catch (error) {
        
    }
})

module.exports = router