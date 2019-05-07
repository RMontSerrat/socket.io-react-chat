import React from 'react';
import { storiesOf } from '@storybook/react';
import UserGroup from './UserGroup';
import User from '../User';

storiesOf('UserGroup', module)
  .add('default', () => (
    <div style={{ backgroundColor: '#025a3f', padding: '20px' }}>
      <UserGroup>
        <User>Romulo</User>
        <User>Jorge</User>
        <User>Zé</User>
      </UserGroup>
    </div>
  ));
