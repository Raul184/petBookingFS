const express = require('express');
const router = express.Router();
//Validations
const { check , validationResult } = require('express-validator');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const config = require('config');

// Model for User
const User = require('../models/User');

// @route   POST /api/users
// @desc    Register Users
// @access  Public   
module.exports = () => {
  router.post(
    '/' , 
    [
      check('name' , 'Please , input your name').not().isEmpty(),
      check('email', 'Please input a valid email address').isEmail(),
      check('password', 'Please input a password with 6 or more characters').isLength({ min: 6 })
    ] , 
    async (req, res) => {
      const errors = validationResult(req);
      if(!errors.isEmpty())
      {
        return res.status(400).json({ errors: errors.array() })
      }
      const { name , email , password } = req.body;
    
      try {
        // User exists ?
        let user = await User.findOne({ email });
        if(user){
          return res.status(400).json({ errors: [{ msg: 'User already exists' }] })
        }
        //Create User
        user = new User({ name , email , password });
          
        //Encrypt Password
            //hashing tool
        const salt = await bcrypt.genSalt(10);
        user.password = await bcrypt.hash( password , salt ); 
          
        await user.save();
        // GENERATE and Return JWT to the browser
        const payload = {
          user: {
            id: user.id
          }
        }
        jwt.sign( 
          payload , 
          config.get('jwtSecret') ,
          { expiresIn: 3600 } ,
          (err, token) => 
          {
            if(err) throw err ;
            return res.json({token}) 
          }
        )
      }  
      catch (error) 
      {
        console.log(error.message);
        return res.status(500).send('Server Error');
      }
    }
  )
  return router;
}