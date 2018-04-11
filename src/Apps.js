import React, {
  Component
} from 'react';
import withStyles from 'material-ui/styles/withStyles';

import AppGroup from './AppGroup';
import appGroups from './assets/app-groups.json';

const styles = theme => ({
  root: {
    overflow: 'hidden',
  },
});

class Apps extends Component {
  createRows = appGroups => {
    const {
      classes
    } = this.props;
    let ret = [];
    let i = 0;
    while (i < appGroups.length) {
      ret.push(
        <div key={ret.length} className={classes.root}>
          <div className='row'>
            <div className='col-md-4'>
              <AppGroup key={i} appGroup={appGroups[i]} />
            </div>
            <div className='col-md-4'>
              <AppGroup key={i+1} appGroup={appGroups[i+1]} />
            </div>
            <div className='col-md-4'>
              <AppGroup key={i+2} appGroup={appGroups[i+2]} />
            </div>
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
export default withStyles(styles)(Apps);