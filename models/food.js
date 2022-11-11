const mongoose = require('mongoose');

let postSchema = mongoose.Schema({
    name: {
      type: String,
      required: true
    },
    price: {
      type: Number,
      required: true
    },
    quantity: {
    type: Number,
    required: true
    },
    slug: {
    type: String,
    required: true
    },
    
}, { versionKey: false });
mongoose.pluralize(null);
module.exports = mongoose.model('Cibo', postSchema);