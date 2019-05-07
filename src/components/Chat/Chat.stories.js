import React from 'react';
import { storiesOf } from '@storybook/react';
import Chat from './Chat';
import Message from '../Message';

const messages = [{
    msg: 'Romulo entrou na sala',
    date: new Date(),
  }, {
    userName: 'Romulo',
    msg: 'Fala galera',
    date: new Date(),
}, {
  msg: 'Zé entrou na sala',
  date: new Date(),
  system: true,
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
      <Chat onSubmit={onSubmit}>
        {messages.map(({ msg, ...item }) => <Message {...item}>{msg}</Message>)}
      </Chat>
    </div>
  ));
