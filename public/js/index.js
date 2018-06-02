
var socket = io();
socket.on('connect',function() {
  console.log("Connected Browser side");
  socket.emit('createMessage',{
    from: 'jack',
    text: 'Yep'
  });
});
socket.on('disconnect',function(){
  console.log('Disconnected from server')
});
socket.on('newMessage',function(message){
  console.log('newMessage',message);
});
