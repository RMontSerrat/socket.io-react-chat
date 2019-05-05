import React from 'react';
import { storiesOf } from '@storybook/react';
import Chat from '../components/Chat';

const data = [{
    text: 'Romulo entrou na sala',
    date: new Date(),
    active: true,
  }, {
    userName: 'Romulo',
    text: 'Fala galera',
    date: new Date(),
    active: true,
}, {
  text: 'Zé entrou na sala',
  date: new Date(),
}, {
  userName: 'Zé',
  text: 'e aiiii....',
  date: new Date(),
}]

const onSubmit = value => { 
  console.log(value);
}

storiesOf('Chat', module)
  .add('default', () => (
    <div style={{ backgroundColor: '#025a3f', padding: '20px' }}>
      <Chat data={data} onSubmit={onSubmit} />
    </div>
  ));
