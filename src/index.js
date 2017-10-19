import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import App from 'ricro-app-template';

import config from './config.json';
import Apps from './Apps';

ReactDOM.render(
  <App config={config} reduxMiddleware={window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()}>
    <Apps/>
  </App>,
  document.getElementById('root')
);
registerServiceWorker();
