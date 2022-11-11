const mongoose = require('mongoose');

let postSchema = mongoose.Schema({
    city: {
      type: String,
      required: true
    },
    services: {
      type: Array,
      required: true
    },
    name: {
        type: String,
        required: true
    },
    resDog: {
        type: Array,
        required: false
    },
    resVet: {
        type: Array,
        required: false
    },
    VetInfo: {
        type: Object,
        required: false
    },
    
}, { versionKey: false });

postSchema.pre('validate', function (next) {
    if (this.isNew) {
        if (this.resVet.length == 0) {
            this.resVet = undefined;       
        }
        else if (this.resVet.length == 1 && this.resVet[0] == null) {
            this.resVet = [];
        }                                                                                                                    
    }
    next();
});

postSchema.pre('validate', function (next) {
    if (this.isNew) {
        if (this.resDog.length == 0) {
            this.resDog = undefined;       
        }
        else if (this.resDog.length == 1 && this.resDog[0] == null) {
            this.resDog = [];
        }                                                                                                                    
    }
    next();
});

mongoose.pluralize(null);
let Site = module.exports = mongoose.model('Site', postSchema);