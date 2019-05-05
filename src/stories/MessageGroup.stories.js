import React from 'react';
import { storiesOf } from '@storybook/react';
import MessageGroup from '../components/MessageGroup';
import Message from '../components/Message';

storiesOf('MessageGroup', module)
  .add('default', () => (
    <div style={{ backgroundColor: '#025a3f', padding: '20px' }}>
      <MessageGroup>
        <Message date={new Date()} text="Romulo entrou na sala" active />
        <Message userName="Romulo" date={new Date()} text="Fala galera" active />
        <Message date={new Date()} text="Zé entrou na sala" />
        <Message userName="Zé" date={new Date()} text="e aiii....." />
      </MessageGroup>
    </div>
  ));
