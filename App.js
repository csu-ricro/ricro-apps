import AppFrame, { createConfig } from 'colostate-ricro-ui';
import React from 'react';
import { Route } from 'react-router-dom';
import config from './src/assets/config';
import Apps from './src/components/Apps';

const App = () => {
  const routes = [{ path: '/', component: Apps }];
  return (
    <AppFrame config={createConfig(config)}>
      {routes.map(route => (
        <Route component={route.component} exact key={route.path} path={route.path} />
      ))}
    </AppFrame>
  );
};

export default App;
