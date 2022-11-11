const mongoose = require('mongoose');

let postSchema = mongoose.Schema({
    email: {
      type: String,
      required: true
    },
    password: {
      type: String,
      required: true
    },
});
mongoose.pluralize(null);
let Post = module.exports = mongoose.model('Post', postSchema);