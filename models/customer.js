const mongoose = require('mongoose')

let postSchema = mongoose.Schema({
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    userid: {
        type: String,
        required: true
    },
    firstname: {
        type: String,
        required: true
    },
    secondname: {
        type: String,
        required: true
    },
    city: {
        type: String,
        required: true
    },
    state: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    vip: {
        type: Boolean,
        required: true
    },
},
{ versionKey: false });
mongoose.pluralize(null);
let Users = module.exports = mongoose.model('Users', postSchema);
