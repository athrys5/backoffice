const mongoose = require('mongoose');

let postSchema = mongoose.Schema({
    testo: {
      type: String,
      required: true
    },
    email: {
      type: String,
      required: true
    },
    date: {
    type: String,
    required: true
    },
    vip: {
    type: Boolean,
    required: true
    },
    
}, 
{ versionKey: false });

let description = module.exports = mongoose.model('description', postSchema);
