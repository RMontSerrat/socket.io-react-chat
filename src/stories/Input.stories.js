import React from 'react';
import { storiesOf } from '@storybook/react';
import Input from '../components/Input';

storiesOf('Input', module)
  .add('default', () => (
    <div style={{ padding: '20px', backgroundColor: '#025a3f' }}>
      <Input />
    </div>
  ));
