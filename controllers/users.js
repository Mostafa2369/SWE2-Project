const ErrorResponse = require('../utils/errorResponse');
const asyncHandler = require('../middleware/async');
const User = require('../models/User');



// @desc      Register user
// @route     POST /api/v1/users/auth/register
// @access    Public
exports.register = asyncHandler(async (req, res, next) => {
    const { name, email, password } = req.body;
  
    // Create user
    const user = await User.create({
        name: name,
       email : email,
      password:password,
      
    });
  
    sendTokenResponse(user, 200, res);
  });
  

  
// Get token from model, create cookie and send response
const sendTokenResponse = (user, statusCode, res) => {
    // Create token
    const token = user.getSignedJwtToken();
  
    const options = {
      expires: new Date(
        Date.now() + process.env.JWT_COOKIE_EXPIRE * 24 * 60 * 60 * 1000
      ),
      httpOnly: true
    };
  
  
    res
      .status(statusCode)
      .cookie('token', token, options)
      .json({
        success: true,
        token
      });
  };
  
// @desc      Get all users
// @route     GET /api/v1/users
// @access    Puplic
exports.getUsers = asyncHandler(async (req, res, next) => {
    res.status(200).json(res.advancedResults);
  });
  