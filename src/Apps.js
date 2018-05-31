import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import AppGroup from './AppGroup';
import appGroups from './assets/app-groups.json';

const styles = () => ({
  root: {
    overflow: 'hidden',
  },
});

class Apps extends React.Component {
  createRows = appGroupsArr => {
    const { classes } = this.props;
    const ret = [];
    let i = 0;
    while (i < appGroupsArr.length) {
      ret.push(
        <div key={ret.length} className={classes.root}>
          <div className="row">
            <div className="col-md-4">
              <AppGroup key={i} appGroup={appGroupsArr[i]} />
            </div>
            <div className="col-md-4">
              <AppGroup key={i + 1} appGroup={appGroupsArr[i + 1]} />
            </div>
            <div className="col-md-4">
              <AppGroup key={i + 2} appGroup={appGroupsArr[i + 2]} />
            </div>
          </div>
        </div>,
      );
      i += 3;
    }
    return ret;
  };
  render() {
    return (
      <div>
        {this.createRows(appGroups).map(row => {
          return row;
        })}
      </div>
    );
  }
}

Apps.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Apps);
