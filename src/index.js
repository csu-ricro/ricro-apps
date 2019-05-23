import AppFrame, { createConfig } from 'colostate-ricro-ui';
import React from 'react';
import ReactDOM from 'react-dom';
import { Route } from 'react-router-dom';
import config from './assets/config';
import Apps from './components/Apps';
import * as serviceWorker from './serviceWorker';

const routes = [{ path: '/', component: Apps }];

ReactDOM.render(
  <AppFrame config={createConfig(config)}>
    {routes.map(route => (
      <Route component={route.component} exact key={route.path} path={route.path} />
    ))}
  </AppFrame>,
  document.getElementById('root'),
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
