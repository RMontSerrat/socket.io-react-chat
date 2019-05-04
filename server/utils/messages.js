const messages = (message, options = {}) => {
  const msgObj = {
    'failed-login': 'Ja existe esse nickName nessa sala.',
    'success-login': `${options.userName} entrou na sala`,
    'user-disconnect': `${options.userName} saiu da sala... :(`
  }

  return msgObj[message];
}

module.exports = messages;