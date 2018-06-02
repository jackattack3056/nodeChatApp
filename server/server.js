const path = require('path');
const publicPath =path.join(__dirname,'../public');
const express = require('express');

// for heroku pushing later
const port = process.env.PORT || 3000;
var app = express();

app.use(express.static(publicPath));

app.listen(port,(req,res) =>{
  console.log(`Server is on ${port}`);
});
