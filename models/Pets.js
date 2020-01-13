const mongoose = require('mongoose');

const petsSchema = new mongoose.Schema({
  user:{
    type: mongoose.Schema.Types.ObjectId ,
    ref: 'user' 
  },
  petname: {
    type: String , 
    trim: true ,
    required: true
  },
  incident: {
    type: String ,
    required: true
  },
  date: {
    type: String ,
    trim: true ,
    required: true 
  }, 
  createdAt: {
    type: Date
  }
});

module.exports = mongoose.model('pet' , petsSchema );


