const express = require('express')
const router = express.Router()
const LeaderBoard = require('../models/leaderboard')

router.get('/leaderboard', async (req, res) =>{
    try{  
        const list = await LeaderBoard.find({});
        res.render('leaderboard.ejs', { data: list })
    }catch{ }
})

module.exports = router