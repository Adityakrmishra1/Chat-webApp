const express = require('express');
const socket  = require('socket.io');

var app=express();

//server
var server=app.listen(4000,function() {
  console.log('listen to req at 4000');
});

//static files
app.use(express.static('public'));


//socket setup
var io=socket(server);


// on connection
io.on('connection',function(socket) {
    console.log('socket is connected',socket.id);

    // listen to client Message
    socket.on('chat',function (data) {


      //sending message to all client
      io.sockets.emit('chat',data);
    });

    //broadcasting message
    socket.on('typing',function (data) {
      socket.broadcast.emit('typing',data);
    });
});
