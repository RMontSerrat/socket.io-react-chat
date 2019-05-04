const users = [];
const express = require('express');
const port = 9010;
const app = express();
const server = require('http').createServer(app);
const io = require('socket.io').listen(server);

io.sockets.on('connection', function (socket) {
  socket.on('room', function(room) {
    socket.join(room);
    io.sockets.in(room).emit('create-room', room);

    let userName;
    socket.on('try-login', function (name) {
      if (users.indexOf(name) > -1) {
        return io.sockets.in(room).emit('login-failed', 'Ja tem um login com esse nick na area!');
      }
      userName = name;
      users.push(userName);
      const msgObj = {
        system: true, msg: `${name} entrou na sala...`, date: new Date() };
  
      io.sockets.in(room).emit('msg', msgObj);
      io.sockets.in(room).emit('all-users', users);
      io.sockets.in(room).emit('login-success', userName);
  
      io.sockets.in(room).emit('add-user', userName);
    });
  
    socket.on('msg', function (msg) {
      const msgObj = { userName, msg, date: new Date() };
  
      io.sockets.in(room).emit('msg', msgObj);
    });
  
    socket.on('disconnect', function () {
      users.splice(users.indexOf(userName), 1);
  
      io.sockets.in(room).emit('user-disconnect', userName);
  
      const msgObj = {
        system: true,
        msg: `${userName} saiu da sala... :(`, date: new Date()
      };
  
      io.sockets.in(room).emit('msg', msgObj);
    });
  });
});

server.listen(port, function(){
  console.log("Rodando o server!");
});