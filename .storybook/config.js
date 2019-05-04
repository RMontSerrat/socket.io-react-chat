import { configure, addDecorator } from '@storybook/react';
import { withThemesProvider } from 'storybook-addon-styled-component-theme';
import theme from '../src/config/theme';

addDecorator(withThemesProvider([theme]));

function loadStories() {
  require('../src/stories/index.stories');

  const req = require.context('../src/stories', true, /\.stories\.js$/);
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);
