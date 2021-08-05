const express = require('express'); 
const router = express.Router(); 
const usersCtrl = require('../../controllers/users'); 

// Public routes 

router.post ('/signup', usersCtrl.signup); 


// Protected Routes



module.exports = router; 