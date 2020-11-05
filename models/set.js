const mongoose = require('mongoose');


const setSchema = new mongoose.Schema({
    name: {
        type: String,
        default:'',
        required: true,        
    },
    theme: String,
    desc: String,
    originalCost: Number,
    resaleCost: Number,
    setComplete: {
        type: Boolean,
        default: true,
    },
    instructionBooklet: {
        type: Boolean,
        default: true,
    },
    image: {
        type: String,
        default:'',

    }
    

}, { timestamps: true });

module.exports = mongoose.model('Set', setSchema);