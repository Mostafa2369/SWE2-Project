const express = require('express');
const {
  register,
  getUsers,
  login
} = require('../controllers/users');
const advancedResults = require('../middleware/advancedResults');
const { protect, authorize } = require('../middleware/auth');

const User = require('../models/User');

const router = express.Router();

// Get all user
//localhost:5000/api/v1/users
router.get('/', protect,authorize('admin') , advancedResults(User) , getUsers);
//localhost:5000/api/v1/users/auth/register 
// Register user
router.post('/auth/register', register);
//localhost:5000/api/v1/users/auth/login 
// Login user
router.post('/auth/login', login);
  
module.exports = router;
