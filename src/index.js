import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import App from 'ricro-app-template';

import config from './config.json';
import Apps from './Apps';

const headerConfig = {
  noLogin: true,
  noHome: true,
};

ReactDOM.render(
  <App config={config} headerConfig={headerConfig} reduxMiddleware={window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()}>
    <Apps/>
  </App>,
  document.getElementById('root')
);
registerServiceWorker();
