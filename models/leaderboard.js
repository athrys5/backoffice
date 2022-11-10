const { Int32 } = require('mongodb');
const mongoose = require('mongoose');
const InitiateMongoServer = require('../config/db');

let postSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    location: {
        type: String,
        required: true
    },
    score: {
        type: Number,
        required: true
    },
    dt: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
},
{ versionKey: false });
mongoose.pluralize(null);
module.exports = mongoose.model('Punteggi', postSchema);
