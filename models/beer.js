const mongoose = require('mongoose'); 
const Schema = mongoose.Schema;

const beerSchema = new Schema({
    name: String,
    brewery: String,
    location: String, 
    alcholContent: Number, 
    myRating: Number, 
}, {
    timestamps: true
}); 

module.exports = mongoose.model('Beer', beerSchema); 