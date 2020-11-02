const mongoose = require('mongoose');


const legoSchema = new mongoose.Schema({
    name: {
        type: String,
        default:'',        
    },
    theme: {
        type: String,
    },
    sets: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Set',
        }
    ]
}, { timestamps: true });

const Lego = mongoose.model('Lego', legoSchema);

module.exports = Lego;