const io = require('socket.io-client');
const server = require('./app');

const options = {
  transports: ['websocket'],
  'force new connection': true
};

const socketURL = 'http://localhost:9010';

const chatUser1 = 'jorge';
const chatUser2 = 'romulo';
const chatUser3 = 'ze';
const room1 = 'room 1';
const room2 = 'room 2';

describe('Chat Events', function(){
  it('Should broadcast new user once they connect', function(done){
    const client = io.connect(socketURL, options);

    client.on('connect',function(socket) {
      client.emit('room', room1);
      client.emit('try-login', chatUser1);
    });
 
    client.on('create-room',function(room){
      expect(room).toEqual(room1);
    });

    client.on('add-user',function(user){
      expect(user).toEqual(chatUser1);
      client.disconnect();
      done(); 
    });
  });

  it('Should broadcast new user to all users', function(done){
    const client1 = io.connect(socketURL, options);

    client1.on('connect', function(data){
      client1.emit('room', room1);
      client1.emit('try-login', chatUser1);
      const client2 = io.connect(socketURL, options);

      client2.on('connect', function(){
        client2.emit('room', room1);
        client2.emit('try-login', chatUser2);
      });

      client2.on('add-user',function(user){
        expect(user).toEqual(chatUser2);
        client2.disconnect();
      });
    });

    let numUsers = 0;
    client1.on('add-user', function(user){
      numUsers += 1;
      if (numUsers === 2) {
        expect(user).toEqual(chatUser2);
        client1.disconnect();
        done();
      }
    });
  });

  it('Should be able to broadcast messages', function(done){
    let client1, client2, client3;
    const message = 'Hello World';
    let messages = 0;

    const checkMessage = function(client){
      client.on('msg', function({ msg }){
        expect(message).toEqual(msg);
        client.disconnect();
        messages++;
        if (messages === 3) {
          done();
        };
      });
    };

    client1 = io.connect(socketURL, options);
    checkMessage(client1);

    client1.on('connect', function() {
      client1.emit('room', room1);
      client2 = io.connect(socketURL, options);
      checkMessage(client2);

      client2.on('connect', function() {
        client2.emit('room', room1);
        client3 = io.connect(socketURL, options);
        checkMessage(client3);

        client3.on('connect', function() {
          client3.emit('room', room1);
          client2.emit('msg', message);
        });
      });
    });
  });

  it('Should login user in different rooms', function(done){
    const client1 = io.connect(socketURL, options);

    client1.on('connect', function(data){
      client1.emit('room', room1);
      client1.emit('try-login', chatUser1);
      const client2 = io.connect(socketURL, options);

      client2.on('connect', function(){
        client2.emit('room', room1);
        client2.emit('try-login', chatUser2);

        const client3 = io.connect(socketURL, options);
        client3.on('connect', function(){
          client3.emit('room', room2);
          client3.emit('try-login', chatUser3);
        });
      });
    });

    let numUsers = 0;
    client1.on('all-users', function(user){
      numUsers += 1;
      if (numUsers === 2) {
        expect(user).toEqual([chatUser1, chatUser2]);
        client1.disconnect();
        done();
      }
    });
  });
});
