var Beer = require('..models/beer'); 

module.exports = {
    create, 
}; 

async function create(req, res) {
    try {
        await Beer.create(req.body); 
    } catch (err) {
        res.json({err}); 
    }
}