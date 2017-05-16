import React from 'react';
import ReactDOM from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

import AppGroup from './AppGroup';
import config from './config.json';

const appGroup = {
  "name": "Internal",
  "shortName": null,
  "apps": [{
    "name": "App Settings",
    "description": "User accounts, permissions, general settings, etc.",
    "icon": "fa fa-sliders",
    "link": "/module-manager/"
  }, {
    "name": "Email Signature Generator",
    "description": "Create a customized email signature",
    "icon": "fa fa-envelope",
    "link": "/signature-generator/"
  }]
};

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <MuiThemeProvider muiTheme={getMuiTheme(config.muiTheme)}>
        <AppGroup appGroup={appGroup} />
      </MuiThemeProvider>,
    div
  );
});
