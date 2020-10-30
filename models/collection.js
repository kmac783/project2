const mongoose = require('mongoose');


const collectionSchema = new mongoose.Schema({
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

const Collection = mongoose.model('Collection', collectionSchema);

module.exports = Collection;