import React from 'react';
import ReactDOM from 'react-dom';
import { Route } from 'react-router-dom';
import App from 'colostate-ricro-ui';
import 'bootstrap/dist/css/bootstrap-grid.min.css';
import registerServiceWorker from './registerServiceWorker';
import config from './config.json';
import Apps from './Apps';
import { version, name as appName, dependencies, homepage } from '../package.json';

// eslint-disable-next-line no-console
console.log(
  `${appName}@${version}`,
  `\n\tcolostate-ricro-ui@${dependencies['colostate-ricro-ui']}`,
);

const routes = [<Route key={0} path="/" exact component={Apps} />];

const reduxMiddleware =
  // eslint-disable-next-line no-underscore-dangle
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();

config.app.basename = homepage;

ReactDOM.render(
  <App config={config} routes={routes} reduxMiddleware={reduxMiddleware} />,
  document.getElementById('root'),
);

registerServiceWorker();
