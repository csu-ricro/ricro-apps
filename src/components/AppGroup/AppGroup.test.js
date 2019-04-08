import AppFrame, { createConfig } from 'colostate-ricro-ui';
import React from 'react';
import ReactDOM from 'react-dom';
import config from '../../assets/config';
import AppGroup from './index';

test('renders without props', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <AppFrame config={createConfig(config)}>
      <AppGroup />
    </AppFrame>,
    div,
  );
});

const appGroupNoIcon = {
  name: 'Testing no Icon',
  shortName: 'test',
  apps: [
    {
      name: 'No Icon Link',
      description: 'Link test',
      link: '/path/to/app/',
    },
  ],
};
test('renders without props', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <AppFrame config={createConfig(config)}>
      <AppGroup>{appGroupNoIcon}</AppGroup>
    </AppFrame>,
    div,
  );
});
