import React from 'react';
import { storiesOf } from '@storybook/react';
import MessageGroup from '../components/MessageGroup';
import Message from '../components/Message';

storiesOf('MessageGroup', module)
  .add('default', () => (
    <div style={{ backgroundColor: '#025a3f', padding: '20px' }}>
      <MessageGroup>
        <Message userName="Servidor" date={new Date()} active>Romulo entrou na sala</Message>
        <Message userName="Romulo" date={new Date()} active>Fala galera</Message>
        <Message userName="Servidor" date={new Date()}>Zé entrou na sala</Message>
        <Message userName="Zé" date={new Date()}>e aiii.....</Message>
      </MessageGroup>
    </div>
  ));
