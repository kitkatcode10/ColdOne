const express = require('express');
const router = express.Router();
const beersCtrl = require('../../controllers/beers');


router.get('/beers/:id', beersCtrl.create);
router.post('/beers', beersCtrl.create)



module.exports = router;