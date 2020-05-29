
//making connection

const socket = io.connect('http://localhost:4000');

console.log('working fine ');


//QueyDom
var message = document.getElementById('message'),
      handle = document.getElementById('handle'),
      btn = document.getElementById('send'),
      output = document.getElementById('output'),
      feedback=document.getElementById('feedback');


// Emit events
btn.addEventListener('click',function(){
  console.log('heeloo from event listener');
  socket.emit('chat', {
    message: message.value,
    handle: handle.value
  });
  message.value = "";
});


//for feedback
message.addEventListener('keypress',function (data) {
  socket.emit('typing',handle.value);

})


//listen for events
socket.on('chat', function(data){
  feedback.innerHTML="";
    output.innerHTML += '<p><strong>' + data.handle + ': </strong>' + data.message + '</p>';
});




//
socket.on('typing',function(data){
  feedback.innerHTML='<p><em>'+data +' is typing a message</em></p>';
})
