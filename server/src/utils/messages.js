const messages = (message, options = {}) => {
  const msgObj = {
    'login-failed': 'Nickname já existente.',
    'login-success': `${options.userName} entrou na sala`,
    'user-disconnect': `${options.userName} saiu da sala... :(`
  }

  return msgObj[message];
}

module.exports = messages;