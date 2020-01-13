const express = require('express');
const router = express.Router();
//Validations
const { check , validationResult } = require('express-validator');
// Model Owners => pets
const Pets = require('../models/Pets');



module.exports = () => {
  // Route     Register pets incident
  // Type      POST
  router.post(
    '/',
    [
      check('petname' , 'Please fill this field').not().isEmpty() ,
      check('incident' , 'Please fill this field').not().isEmpty() 
    ] ,
    async (req, res) => {
      const errors = validationResult(req);
      if(!errors.isEmpty())
      {
        return res.status(400).json({ errors: errors.array() })
      }
      const { petname , incident } = req.body;
        
      try {

      }
      catch (error) 
      {
        console.log(error.message);
        return res.status(500).send('Server Error');
      }
    }
  );
  
  return router;
}
