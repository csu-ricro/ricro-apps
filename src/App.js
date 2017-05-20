import React, {
  Component
} from 'react';
import $ from 'jquery';
import AppBar from 'material-ui/AppBar';
import {
  Toolbar,
  ToolbarTitle,
  ToolbarGroup
} from 'material-ui/Toolbar';
import IconButton from 'material-ui/IconButton';
import FontIcon from 'material-ui/FontIcon';

import CsuSvgLogo, {
  CsuFooter
} from './CsuBranding';
import AppGroup from './AppGroup';

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
  componentDidMount() {
    $(window).scroll(function() {
      if ($(this).scrollTop() > 1) {
        $('#logobar').addClass('display-none');
        $('#top-toolbar').addClass('sticky');
      } else {
        $('#logobar').removeClass('display-none');
        $('#top-toolbar').removeClass('sticky');
      }
    });
  }
  render() {
    return (
      <div>
        <AppBar
          id='logobar'
          iconElementLeft={<CsuSvgLogo />} />
        <Toolbar id='top-toolbar'>
          <ToolbarTitle text={config.appName} />
          <ToolbarGroup>
            <IconButton
              href={config.unitContact}
              tooltip='Contact Us'
              tooltipPosition='bottom-left'>
              <FontIcon className='material-icons'>email</FontIcon>
            </IconButton>
          </ToolbarGroup>
        </Toolbar>
        <div id="main-content">
          {this.createRows(appGroups).map((row, i)=>{
            return row;
          })}
        </div>
        <CsuFooter/>
      </div>
    );
  }
}
export default App;
