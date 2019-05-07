const io = require('socket.io-client');
const port = process.env.PORT;
const server = require('./app');
const getMessage = require('./utils/messages');

const options = {
  transports: ['websocket'],
  'force new connection': true
};

const socketURL = `http://localhost:${port}`;

const chatUser1 = 'jorge';
const chatUser2 = 'romulo';
const chatUser3 = 'ze';

describe('Chat Events', function(){
  it('Should broadcast new user once they connect', function(done){
    const client = io.connect(socketURL, options);
    const room = 'room 1';
    
    client.on('connect',function(socket) {
      client.emit('room', room);
      client.emit('try-login', chatUser1);
      client.on('msg', function(message) {
        expect(message.msg).toEqual(getMessage('login-success', { userName: chatUser1 }));
      })
    });
 
    client.on('create-room',function(currentRoom){
      expect(currentRoom).toEqual(room);
    });

    client.on('all-users',function(user){
      expect(user).toEqual([chatUser1]);
      client.disconnect();
      done(); 
    });
  });

  it('Should broadcast login failed when user is already in use', function(done){
    const client1 = io.connect(socketURL, options);
    const room = 'room2';

    client1.on('connect', function(data){
      client1.emit('room', room);
      client1.emit('try-login', chatUser1);
      const client2 = io.connect(socketURL, options);

      client2.on('connect', function(){
        client2.emit('room', room);
        client2.emit('try-login', chatUser1);
      });
      client2.on('login-failed', function(message){
        expect(message).toEqual(getMessage('login-failed'));
      }); 
    });
    client1.on('all-users', function(user){
      expect(user).toEqual([chatUser1]);
      client1.disconnect();
      done();
    });
  });

  it('Should broadcast new user to all users', function(done){
    const client1 = io.connect(socketURL, options);
    const room = 'room3';
    client1.on('connect', function(data){
      client1.emit('room', room);
      client1.emit('try-login', chatUser1);
      const client2 = io.connect(socketURL, options);

      client2.on('connect', function(){
        client2.emit('room', room);
        client2.emit('try-login', chatUser2);
      });

      client2.on('all-users',function(user){
        expect(user).toEqual([chatUser1, chatUser2]);
        client2.disconnect();
        done();
      }); 
    });

    let numUsers = 0;
    client1.on('all-users', function(users){
      numUsers += 1;
      if (numUsers === 2) {
        console.log('users', users);
        expect(users).toEqual([chatUser1, chatUser2]);
        client1.disconnect();
      }
    });
  });

  it('Should be able to broadcast messages', function(done){
    let client1, client2, client3;
    const message = 'Hello World';
    const room = 'room4';
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
      client1.emit('room', room);
      client2 = io.connect(socketURL, options);
      checkMessage(client2);

      client2.on('connect', function() {
        client2.emit('room', room);
        client3 = io.connect(socketURL, options);
        checkMessage(client3);

        client3.on('connect', function() {
          client3.emit('room', room);
          client2.emit('msg', message);
        });
      });
    });
  });

  it('Should login users in different rooms', function(done){
    const client1 = io.connect(socketURL, options);
    const room1 = 'room5';
    const room2 = 'room6';

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
    client1.on('all-users', function(users){
      numUsers += 1;
      if (numUsers === 2) {
        expect(users).toEqual([chatUser1, chatUser2]);
        client1.disconnect();
        done();
      }
    });
  });
});
