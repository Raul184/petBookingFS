const express = require('express');
const db = require('./config/db')
// Port 
const PORT = process.env.PORT || 4000;
// Server
const app = express();
// DB
db();
//Middleware to parser req
app.use( express.json({ extended: false }));



app.get('/' , ( req , res ) => res.send('Server running'));


//CORS
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "http://localhost:3000");
  res.header("Access-Control-Allow-Credentials", "true");
  res.header("Access-Control-Allow-Headers", "Origin , Content-Type , Authorization, x-id , Content-Length , X-Requested-With , x-auth-token");
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
  next();
});

// Habilitar Routes
app.use('/api/users' , require('./routes/users'))
app.use('/api/auth' , require('./routes/auth'))
app.use('/api/pets' , require('./routes/pets'))



app.listen(PORT , () => console.log(`Server running on port: ${PORT}`));