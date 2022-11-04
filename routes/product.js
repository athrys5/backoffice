const express = require('express');
const router = express.Router()
const food = require('../models/food');
const accessory = require('../models/accessory');
const health = require('../models/health');
const bodyParser = require('body-parser');
router.use(bodyParser.json()); // for parsing application/json
router.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

router.post('/food', async (req, res) => { 
  try {
    await food.insertMany({name: req.body.Name, price: req.body.Price, quantity: req.body.Quantity, slug:req.body.Slug})
    res.redirect('/product')   
  } catch { console.error() }
  })

router.post('/accessory', async (req, res) => { 
  try {
    await accessory.insertMany({name: req.body.Name, price: req.body.Price, quantity: req.body.Quantity, slug:req.body.Slug})
    res.redirect('/product')   
  } catch { console.error() }
  })

router.post('/health', async (req, res) => { 
  try {
    await health.insertMany({name: req.body.Name, price: req.body.Price, quantity: req.body.Quantity, slug:req.body.Slug})
    res.redirect('/product')   
  } catch { console.error() }
  })


router.post('/deletefood', async (req, res) => {
  try{
    await food.deleteMany({slug: req.body.Slug})
    res.redirect('/product')
  }catch{
    console.error()
  }
})

router.post('/deleteaccessory', async (req, res) => {
  try{
    await accessory.deleteMany({slug: req.body.Slug})
    res.redirect('/product')
  }catch{
    console.error()
  }
})

router.post('/deletehealth', async (req, res) => {
  try{
    await health.deleteMany({slug: req.body.Slug})
    res.redirect('/product')
  }catch{
    console.error()
  }
})

router.post('/modifyfood', async (req, res) => {
  try{
    const filter = {slug: req.body.Slug}
    const options = { upsert: false };
    const updateDoc = {
      $set: {
        name: req.body.Name, 
        price: req.body.Price, 
        quantity: req.body.Quantity
      },
    };
    const result = await food.updateMany(filter, updateDoc, options)
    console.log(
      `${result.matchedCount} document(s) matched the filter, updated ${result.modifiedCount} document(s)`,
    );
    res.redirect('/product')
  }catch{
    console.error()
  }
})

router.post('/modifyaccessory', async (req, res) => {
  try{
    const filter = {slug: req.body.Slug}
    const options = { upsert: false };
    const updateDoc = {
      $set: {
        name: req.body.Name, 
        price: req.body.Price, 
        quantity: req.body.Quantity
      },
    };
    const result = await accessory.updateMany(filter, updateDoc, options)
    console.log(
      `${result.matchedCount} document(s) matched the filter, updated ${result.modifiedCount} document(s)`,
    );
    res.redirect('/product')
  }catch{
    console.error()
  }
})

router.post('/modifyhealth', async (req, res) => {
  try{
    const filter = {slug: req.body.Slug}
    const options = { upsert: false };
    const updateDoc = {
      $set: {
        name: req.body.Name, 
        price: req.body.Price, 
        quantity: req.body.Quantity
      },
    };
    const result = await health.updateMany(filter, updateDoc, options)
    console.log(
      `${result.matchedCount} document(s) matched the filter, updated ${result.modifiedCount} document(s)`,
    );
    res.redirect('/product')
  }catch{
    console.error()
  }
})

module.exports = router