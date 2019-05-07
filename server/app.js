const express = require('express');
const port = process.env.PORT;
const app = express();
const server = require('http').createServer(app);
const io = require('socket.io').listen(server);
const getMessage = require('./utils/messages');

const rooms = [];

io.sockets.on('connection', function (socket) {
  socket.on('room', function(roomId) {
    const now = new Date();
    socket.join(roomId);
    io.sockets.in(roomId).emit('create-room', roomId);
    if (!rooms[roomId]) {
      rooms[roomId] = {
        users: [],
        messages: [],
      };
    };

    const messages = rooms[roomId].messages;
    const users = rooms[roomId].users;

    let userName;
    socket.on('try-login', function (name) {
      if (users.indexOf(name) > -1) {
        return io.sockets.in(roomId).emit('login-failed', getMessage('login-failed'));
      }
      userName = name;
      users.push(userName);
      const msgObj = {
        system: true, msg: getMessage('login-success', { userName }), date: now };

      messages.push(msgObj);
      io.sockets.in(roomId).emit('msg', msgObj);
      io.sockets.in(roomId).emit('all-users', users);
      io.sockets.in(roomId).emit('all-messages', messages);
      io.sockets.in(roomId).emit('login-success', userName);
    });
  
    socket.on('msg', function (msg) {
      const msgObj = { userName, msg, date: now };
      messages.push(msgObj);
      io.sockets.in(roomId).emit('msg', msgObj);
    });
  
    socket.on('disconnect', function () {
      users.splice(users.indexOf(userName), 1);
  
      io.sockets.in(roomId).emit('user-disconnect', userName);
  
      const msgObj = {
        system: true,
        msg: getMessage('user-disconnect', { userName }), date: now
      };
      messages.push(msgObj);
      io.sockets.in(roomId).emit('msg', msgObj);
    });
  });
});

server.listen(port, function(){
  console.log("Rodando o server na porta", port);
});