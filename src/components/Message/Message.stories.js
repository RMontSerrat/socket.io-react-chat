import React from 'react';
import { storiesOf } from '@storybook/react';
import Message from './Message';

storiesOf('Message', module)
  .add('default', () => (
    <div style={{ padding: '20px' }}>
      <Message userName="Romulo" date={new Date()}>Fala galera</Message>
    </div>
  ))
  .add('without userName', () => (
    <div style={{ padding: '20px' }}>
      <Message userName="Servidor" date={new Date()}>Romulo entrou na sala...</Message>
    </div>
  ));

