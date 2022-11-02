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

/*app.post("/dogs", async (req, res) => {
    
  });
  
  app.put("/dogs/:id", async (req, res) => {
    const { id } = req.params;
    await Dog.updateOne({ id }, req.body);
    const updatedDog = await Dog.findById(id);
    return res.status(200).json(updatedDog);
  });*/

module.exports = router