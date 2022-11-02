if (process.env.NODE_ENV !== 'production') {
    require('dotenv').config()
  }
/*
const express = require('express')
const bcrypt = require('bcrypt')
const passport = require('passport')
const router = express.Router()
const flash = require('express-flash')
const session = require('express-session')
const methodOverride = require('method-override')
const initializePassport = require('./../passport-config')
initializePassport(
passport,
    email => users.find(user => user.email === email),
    id => users.find(user => user.id === id)
)

const users = []

router.use(express.urlencoded({ extended: false }))
router.use(flash())
router.use(session({
secret: process.env.SESSION_SECRET,
resave: false,
saveUninitialized: false
}))
router.use(passport.initialize())
router.use(passport.session())
router.use(methodOverride('_method'))

router.get('/', checkAuthenticated, (req, res) => {
    res.render('index.ejs', { name: req.user.name })
})

router.get('/login', checkNotAuthenticated, (req, res) => {
    res.render('login.ejs')
})

router.post('/login', checkNotAuthenticated, passport.authenticate('local', {
    successRedirect: '/',
    failureRedirect: '/login',
    failureFlash: true
}))

router.get('/register', checkNotAuthenticated, (req, res) => {
    res.render('register.ejs')
})

router.post('/register', checkNotAuthenticated, async (req, res) => {
try {
    const hashedPassword = await bcrypt.hash(req.body.password, 10)
    users.push({
    id: Date.now().toString(),
    name: req.body.name,
    email: req.body.email,
    password: hashedPassword
    })
    res.redirect('/login')
} catch {
    res.redirect('/register')
}
})

router.delete('/logout', (req, res) => {
    req.logOut(function(err) {
        if (err) { return next(err); }
        res.redirect('/login');
        });
})

function checkAuthenticated(req, res, next) {
    if (req.isAuthenticated()) {
        return next()
}

res.redirect('/login')
}

function checkNotAuthenticated(req, res, next) {
    if (req.isAuthenticated()) {
        return res.redirect('/')
}
next()
}

module.exports = router*/

const express = require('express')
const passport = require('passport')
const flash = require('express-flash')
const session = require('express-session')
const methodOverride = require('method-override')
const router = express.Router()
const initializePassport = require('./../passport-config')
const Post = require('../models/Post');

initializePassport(
passport,
    email => users.find(user => user.email === email),
    id => users.find(user => user.id === id)
)

const users = []

router.use(express.urlencoded({ extended: false }))
router.use(flash())
router.use(session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false
}))
router.use(passport.initialize())
router.use(passport.session())
router.use(methodOverride('_method'))

router.get('/', (req, res) => {
    res.render('index.ejs')
})

router.get('/login', (req, res) => {
    res.render('login.ejs', {layout: false})
})

router.post('/login', async (req, res) => {
    try {
        users.push({
            email: req.body.email,
            password: req.body.password
        })
        const user = await Post.find({email: req.body.email, password: req.body.password})
        if(user.length == 0){
            res.redirect('/login')
        }else{
            res.redirect('/')
        }     
    } catch {
        res.redirect('/register')
    }
    })

router.post('/login', async (req, res) =>{
    try {
        const email = req.body.email
        const password = req.body.password
        console.log(email, password)
    } catch {
        console.log(req.body.email, req.body.password)
    }
})

router.delete('/logout', (req, res) => {
    req.logOut(function(err) {
        if (err) { return next(err); }
        res.redirect('/login');
        });
})

module.exports = router