const path = require('path');
const http = require('http');
const express = require('express');
const socketIO = require('socket.io');



const publicPath =path.join(__dirname,'../public');
// for heroku pushing later
const port = process.env.PORT || 3000;
var app = express();
// setting up server for socket.io
var server = http.createServer(app);

var io = socketIO(server);

app.use(express.static(publicPath));



io.on('connection',(socket)=>{
  console.log("New User Connected");

  socket.emit('newMessage',{
    from: 'Mike',
    text: 'Hey, What is going on',
    createdAT:123123
  });
socket.on('createMessage',(message)=>{
  console.log("MessageWorked",message);
});

socket.on('disconnect',()=>{
  console.log("client disconnected");
  });
});



server.listen(port,(req,res) =>{
  console.log(`Server is on ${port}`);
});
