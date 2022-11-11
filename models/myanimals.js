const mongoose = require('mongoose')

let postSchema = mongoose.Schema({
    email: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    gender: {
        type: String,
        required: true
    },
    breed: {
        type: String,
        required: true
    },
    height: {
        type: String,
        required: true
    },
    length: {
        type: String,
        required: true
    },
    age: {
        type: String,
        required: true
    },
},
{ versionKey: false });
mongoose.pluralize(null);
let Animal = module.exports = mongoose.model('Animal', postSchema);
