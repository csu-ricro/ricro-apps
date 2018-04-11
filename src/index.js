import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import {
  Route,
} from 'react-router-dom';

import "bootstrap/dist/css/bootstrap-grid.min.css";

import App from 'ricro-app-template';

import config from './config.json';
import Apps from './Apps';

import {
  version,
  name as appName,
  dependencies,
  homepage,
} from '../package.json';
console.log(appName + '@' + version, '\n\tricro-app-template@' + dependencies['ricro-app-template']);

const routes = [
  <Route key={0} path='/' exact component={Apps}/>,
];

config.app.basename = homepage;
ReactDOM.render(
  <App
    config={config}
    routes={routes}
    reduxMiddleware={window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()}
    />,
  document.getElementById('root')
);
registerServiceWorker();