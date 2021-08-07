const mongoose = require('mongoose');  


const beerSchema = new mongoose.Schema({
    name: String,
    brewery: String,
    location: String, 
    alcholContent: Number, 
    myRating: Number, 
}, {
    timestamps: true
}); 

module.exports = mongoose.model('Beer', beerSchema); 