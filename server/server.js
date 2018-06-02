const path = require('path');
const express = require('express');
const http = require('http');
const socketIO = require('socket.io');
var app = express();
var server = http.createServer(app);
var io = socketIO(server);

const publicPath =path.join(__dirname,'../public');
// for heroku pushing later
const port = process.env.PORT || 3000;

// setting up server for socket.io



app.use(express.static(publicPath));



io.on('connection',(socket)=>{
  console.log("New User Connected");

socket.on('createMessage',(message)=>{
  console.log("MessageWorked",message);
  io.emit('newMessage',{
    from: message.from,
    text: message.text,
    createdAT: new Date().getTime()
  });
});

socket.on('disconnect',()=>{
  console.log("client disconnected");
  });
});



server.listen(port,(req,res) =>{
  console.log(`Server is on ${port}`);
});
