import React from 'react';
import { storiesOf } from '@storybook/react';
import Chat from '../components/Chat';
import Message from '../components/Message';

const messages = [{
    msg: 'Romulo entrou na sala',
    date: new Date(),
    active: true,
  }, {
    userName: 'Romulo',
    msg: 'Fala galera',
    date: new Date(),
    active: true,
}, {
  msg: 'Zé entrou na sala',
  date: new Date(),
}, {
  userName: 'Zé',
  msg: 'e aiiii....',
  date: new Date(),
}]

const onSubmit = value => { 
  console.log(value);
}

storiesOf('Chat', module)
  .add('default', () => (
    <div style={{ backgroundColor: '#025a3f', padding: '20px' }}>
      <Chat name="Default" onSubmit={onSubmit}>
        {messages.map(({ msg, ...item }) => <Message {...item}>{msg}</Message>)}
      </Chat>
    </div>
  ));
