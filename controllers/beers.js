var Beer = require('../models/beer'); 
// const ObjectId = require("mongodb").ObjectId; 

async function create(req, res, next) {
    // req.body.list = 'beers'; 
    // const beer = new Beer(req.body); {
    // try {
    //     await beer.save();  
    // } catch (err) {
    //     res.json({err}); 
    // }
}

async function myBeers(req, res) {
    const beers = await Beer.find({})
    .sort()
    res.json(beers); 
}

module.exports = {
    create, 
    myBeers, 
}; 