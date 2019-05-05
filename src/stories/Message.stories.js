import React from 'react';
import { storiesOf } from '@storybook/react';
import Message from '../components/Message';

storiesOf('Message', module)
  .add('default', () => (
    <div style={{ padding: '20px' }}>
      <Message userName="Romulo" date={new Date()} text="Fala galera" />
    </div>
  ))
  .add('without userName', () => (
    <div style={{ padding: '20px' }}>
      <Message date={new Date()} text="Romulo entrou na sala..." />
    </div>
  ))
  .add('active', () => (
    <div style={{ padding: '20px' }}>
      <Message userName="Romulo" active date={new Date()} text="Fala galera" />
    </div>
  ));


