const express = require('express')
const app = express()
const expressLayouts = require('express-ejs-layouts')
const InitiateMongoServer = require("./config/db")
const loginRouter = require('./routes/index')
const pagesRouter = require('./routes/pages')
const prodRouter = require('./routes/product')
const descRouter = require('./routes/desc')
const customerRouter = require('./routes/customers')
const animalsRouter = require('./routes/myanimals')
const leaderboardRouter = require('./routes/leaderboard')
const servicesRouter = require('./routes/services')
const path = require('path')
InitiateMongoServer()
app.use('/css', express.static(path.join(__dirname, 'node_modules/bootstrap/dist/css')));
app.use('/js', express.static(path.join(__dirname, 'node_modules/bootstrap/dist/js')));
app.use('/fa', express.static(path.join(__dirname, 'node_modules/@fortawesome/fontawesome-free/css')));
app.use('/webfonts', express.static(path.join(__dirname, 'node_modules/@fortawesome/fontawesome-free/webfonts')));
app.use(express.static('public')); // js & css
app.set('view engine', 'ejs')
app.set('views', __dirname + '/views')
app.set('layout', 'layouts/layout')

app.use(expressLayouts) //library for common layout

app.use('/', prodRouter)
app.use('/', pagesRouter)
app.use('/', loginRouter)
app.use('/', descRouter)
app.use('/', customerRouter)
app.use('/', animalsRouter)
app.use('/', leaderboardRouter)
app.use('/', servicesRouter)

app.listen(8080)