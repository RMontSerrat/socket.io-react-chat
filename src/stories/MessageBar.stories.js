import React from 'react';
import { storiesOf } from '@storybook/react';
import MessageBar from '../components/MessageBar';

storiesOf('MessageBar', module)
  .add('default', () => (
    <div style={{ backgroundColor: '#025a3f', padding: '20px' }}>
      <MessageBar />
    </div>
  ));
