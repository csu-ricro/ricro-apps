import React, {
  Component
} from 'react';
import {
  ToolbarTitle,
  ToolbarGroup
} from 'material-ui/Toolbar';
import IconButton from 'material-ui/IconButton';
import FontIcon from 'material-ui/FontIcon';

import AppContainer from './csu-app-template/AppContainer';
import AppGroup from './AppGroup';

import config from './config.json';
import appGroups from './app-groups.json';

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
    const header = [
      <ToolbarTitle key={0} text={config.app.name} />,
      (<ToolbarGroup key={1}>
        <IconButton
          href={config.unitContact}
          tooltip='Contact Us'
          tooltipPosition='bottom-left'>
          <FontIcon className='material-icons'>email</FontIcon>
        </IconButton>
      </ToolbarGroup>)
    ]
    return (
      <AppContainer config={config} header={header}>
          {this.createRows(appGroups).map((row, i)=>{
            return row;
          })}
      </AppContainer>
    );
  }
}
export default App;
