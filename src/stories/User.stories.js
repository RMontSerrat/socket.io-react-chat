import React from 'react';
import { storiesOf } from '@storybook/react';
import User from '../components/User';

storiesOf('User', module)
  .add('default', () => (
    <div style={{ padding: '20px' }}>
      <User>Romulo</User>
    </div>
  ));
