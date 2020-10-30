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
    setComplete: Boolean,
    instructionBooklet: Boolean,
    owner: Boolean,

}, { timestamps: true });

const Set = mongoose.model('Set', setSchema);

module.exports = Set;