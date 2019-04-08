import AppFrame, { createConfig } from 'colostate-ricro-ui';
import React from 'react';
import ReactDOM from 'react-dom';
import config from '../../assets/config';
import Apps from './index';

test('renders without props', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <AppFrame config={createConfig(config)}>
      <Apps />
    </AppFrame>,
    div,
  );
});
