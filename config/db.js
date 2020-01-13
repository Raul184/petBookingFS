const mongoose = require('mongoose');
const config = require('config');
// mongoose.set('useFindAndModify', false);


const db = async () => {
  try {
    await mongoose.connect(config.get("mongoURI") , {
      useCreateIndex: true,
      useNewUrlParser: true ,
      useUnifiedTopology: true,
    })
    console.log('Connected to DB');  
  } 
  catch (error) {
    console.error(error.message)
  }
}

module.exports = db;