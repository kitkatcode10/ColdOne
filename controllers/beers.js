var Beer = require('..models/beer'); 

module.exports = {
    create, 
    mBbeers, 
}; 

async function create(req, res) {
    try {
        await Beer.create(req.body); 
        beers(req, res); 
    } catch (err) {
        res.json({err}); 
    }
}

async function myBeers(req, res) {
    const scores = await Beer.find({})
    .sort()
    res.json(beers); 
}