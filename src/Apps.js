import React, {
  Component
} from 'react';

import AppGroup from './AppGroup';
import appGroups from './app-groups.json';

class Apps extends Component {
  createRows(appGroups) {
    let ret = [];
    let i = 0;
    while (i < appGroups.length) {
      ret.push(
        <div key={ret.length} className='container-fluid'>
          <div className='row'>
          <AppGroup key={i} appGroup={appGroups[i]} />
          <AppGroup key={i+1} appGroup={appGroups[i+1]} />
          <AppGroup key={i+2} appGroup={appGroups[i+2]} />
          </div>
        </div>
      );
      i += 3;
    }
    return ret;
  }
  render() {
    return (
      <div>
          {this.createRows(appGroups).map((row, i)=>{
            return row;
          })}
      </div>
    );
  }
}
export default Apps;
