const express = require('express');
const {
  register,
  getUsers
} = require('../controllers/users');
const advancedResults = require('../middleware/advancedResults');
const User = require('../models/User');

const router = express.Router();

// Get user
router.get('/',advancedResults(User), getUsers);

// Register user
router.post('/auth/register', register);

  
module.exports = router;
