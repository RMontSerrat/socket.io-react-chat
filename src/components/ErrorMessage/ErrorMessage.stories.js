import React from 'react';
import { storiesOf } from '@storybook/react';
import ErrorMessage from './ErrorMessage';

storiesOf('ErrorMessage', module)
  .add('default', () => (
    <div style={{ backgroundColor: '#025a3f', padding: '20px' }}>
      <ErrorMessage>O usuário já existe</ErrorMessage>
    </div>
  ));
