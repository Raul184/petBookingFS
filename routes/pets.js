const express = require('express');
const router = express.Router();
//Validations
const { check , validationResult } = require('express-validator');
//middleware
const middleware = require('../middleware/auth');
// Model Owners => pets
const Pets = require('../models/Pets');


// @route   POST /api/pets
// @desc    Order pet assistance
// @access  Private   
router.post(
  '/',
  middleware ,
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
      const userPet = await Pets.findOne({ petname });
      if(userPet){
        return res.status(200).json({ msg: "No worries , your pet is already on treatment"})
      } 
      else {  
        const pet = new Pets({ petname , incident });
        await pet.save();
        return res.status(200).json({ 
          msg: "Thank you and no worries , we will contact you by phone as soon as possible"
        })
      }
    }
    catch (error) 
    {
      console.log(error.message);
      return res.status(500).send('Server Error');
    }
  }
);
  
// @route   GET /api/pets/id
// @desc    Get a particular pet
// @access  Private   
router.get(
  '/:id' ,
  middleware ,
  async ( req , res ) => {
    try {
      const pet = await Pets.findById( req.params.id );
      if(!pet){
        return res.status(404).json({ 
          msg: "Sorry , we don't have a pet registered with this user"
        })
      }
      return res.json(pet);
    } 
    catch (error) {
      console.log(error.message);
      return res.status(500).send('Server Error');
    }
  }
)

// @route   PUT /api/pets/id
// @desc    Update a pet state
// @access  Private   
router.put(
  '/:id' ,
  middleware ,
  async ( req , res ) => {
    try {
      const pet = await Pets.findOneAndUpdate({ _id: req.params.id } , req.body , { new: true });
      if(!pet){ 
        return res.status(404).json({ 
          msg: "Sorry , we don't have a pet registered with this user"
        })
      }
      return res.json(pet);
    } 
    catch (error) {
      console.log(error.message);
      return res.status(500).send('Server Error');
    }
  }
)

// @route   DELETE /api/pets/id
// @desc    Update a pet state
// @access  Private   
router.delete(
  '/:id' ,
  middleware ,
  async ( req , res ) => {
    try {

      await Pets.findByIdAndDelete(req.params.id);
      return res.json({ msg: "Your pet has been removed from our system"});
    } 
    catch (error) {
      console.log(error.message);
      return res.status(500).send('Server Error');
    }
  }
)


module.exports = router;

