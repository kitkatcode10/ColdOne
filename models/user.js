const User = require("../models/user"); 
const mongoose = require('mongoose'); 
// const bcrypt = require('bcrypt');

// const SALT_ROUNDS = 6; 

const userSchema = new mongoose.Schema({
    name: String,
    email: {type: String, required: true, lowercase: true, unique: true}, 
    password: String
}, { 
    timestamps:true
}); 


userSchema.set('toJSON', {
  transform: function(doc, ret) {
    // to remove the password property when serializing document to JSON....
    delete ret.password;
    return ret; 
}

}); 

module.exports = mongoose.model('User', userSchema)