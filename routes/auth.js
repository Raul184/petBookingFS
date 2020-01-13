const express = require('express');
const router = express.Router();
//Validations
const { check , validationResult } = require('express-validator');


module.exports = () => {

  // Register an User   
  // POST 
  // api/auth
  router.post(
    '/' ,
    async ( req, res ) => {
      try {
      
      } 
      catch (error) {
        console.error(error.message)
        res.json({ status: error.response.status , msg: error.response.statusMessage })  
      }
    }
  )


  return router;
};