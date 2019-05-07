import io from 'socket.io-client';
import config from '../config';
const socket = io(config.socketUrl);

const actions = {
  sendMessage: msg => {
    socket.emit('msg', msg);
  },

  onSendMessage: callback => {
    socket.on('msg', callback);
  },

  createRoom: name => {
    socket.emit('room', name);
  },

  onCreateRoom: callback => {
    socket.on('create-room', callback);
  },
  onLoadUsers: callback => {
    socket.on('all-users', callback);
  },
  onLoadMessages: callback => {
    socket.on('all-messages', callback);
  },
  onDisconnectUser: callback => {
    socket.on('user-disconnect', callback);
  },

  tryLogin: nickname => {
    socket.emit('try-login', nickname);
  },

  onSuccessLogin: callback => {
    socket.on('login-success', callback);
  },

  onFailedLogin: callback => {
    socket.on('login-failed', callback);
  },
};

export default actions;