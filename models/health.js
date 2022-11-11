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
let ProdSanitari = module.exports = mongoose.model('ProdSanitari', postSchema);