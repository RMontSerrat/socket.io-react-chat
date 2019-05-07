import React from 'react';
import { storiesOf } from '@storybook/react';
import FormLogin from './FormLogin';

storiesOf('FormLogin', module)
  .add('default', () => (
    <div style={{ backgroundColor: '#025a3f', padding: '20px' }}>
      <FormLogin />
    </div>
  ))
  .add('with error message', () => (
    <div style={{ backgroundColor: '#025a3f', padding: '20px' }}>
      <FormLogin errorMessage="Usuário já existe" />
    </div>
  ));

