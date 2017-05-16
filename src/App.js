import React, {
  Component
} from 'react';
import AppBar from 'material-ui/AppBar';
import {
  Toolbar,
  ToolbarTitle
} from 'material-ui/Toolbar';

import CsuSvgLogo from './CsuBranding';
import AppGroup from './AppGroups';

import config from './config.json';
import appGroups from './app-groups.json';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/font-awesome/css/font-awesome.min.css';

document.title = document.title === '' ? config.appName + ' - ' + config.unitTitle : document.title;

class App extends Component {
  createRows(appGroups) {
    let ret = [];
    let i = 0;
    while (i < appGroups.length) {
      ret.push((
        <div key={ret.length} className='row'>
          <AppGroup
            key={i}
            appGroup={appGroups[i]} />
          <AppGroup
            key={i+1}
            appGroup={appGroups[i+1]} />
          <AppGroup
            key={i+2}
            appGroup={appGroups[i+2]} />
        </div>
      ));
      i += 3;
    }
    return ret;
  }
  render() {
    return (
      <div>
        <AppBar
          iconElementLeft={<CsuSvgLogo />} />
        <Toolbar>
          <ToolbarTitle text={config.appName} />
        </Toolbar>
        <div id="main-content">
          <div style={{width:'80%',margin:'0 auto'}}>
            {this.createRows(appGroups).map((row, i)=>{
              return row;
            })}
          </div>
        </div>
      </div>
    );
  }
}
export default App;
