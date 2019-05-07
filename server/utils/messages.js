const messages = (message, options = {}) => {
  const msgObj = {
    'login-failed': 'Ja existe esse nickName nessa sala.',
    'login-success': `${options.userName} entrou na sala`,
    'user-disconnect': `${options.userName} saiu da sala... :(`
  }

  return msgObj[message];
}

module.exports = messages;