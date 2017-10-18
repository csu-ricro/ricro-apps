import React from 'react';
import PropTypes from 'prop-types';
import {
  withStyles,
} from 'material-ui/styles';
import Icon from 'material-ui/Icon';
import List, {
  ListItem,
  ListItemText,
  ListItemSecondaryAction,
} from 'material-ui/List';
import IconButton from 'material-ui/IconButton';
import Divider from 'material-ui/Divider';
import Avatar from 'material-ui/Avatar';
import Typography from 'material-ui/Typography';

const styles = theme => ({
  appLink: {
    '&:hover': {
      textDecoration: 'none',
    }
  },
  avatar: {
    backgroundColor: theme.palette.csuBrand.primary.green,
  },
});

const AppGroup = (props) => {
  if (props.appGroup == null) {
    return null;
  }
  let groupHeader = (
    <Typography type="display1">
      {props.appGroup.name}
    </Typography>
  );
  return (
    <div className='col-md-4'>
      {groupHeader}
      <List>
        <Divider />
        {props.appGroup.apps.map((app, i) => {
          return(
            <div key={i}>
              <a href={app.link} className={props.classes.appLink}>
                <ListItem button>
                  <Avatar className={props.classes.avatar}>
                    <Icon>{app.icon}</Icon>
                  </Avatar>
                  <ListItemText primary={app.name} secondary={app.description} />
                  <ListItemSecondaryAction>
                    <IconButton>
                      <Icon>keyboard_arrow_right</Icon>
                    </IconButton>
                  </ListItemSecondaryAction>
                </ListItem>
              </a>
              {props.appGroup.apps.length-1 !== i ? <Divider inset /> : null}
            </div>
          )
        })}
      </List>
    </div>
  );
}

AppGroup.propTypes = {
  classes: PropTypes.object.isRequired,
  appGroup: PropTypes.object,
};

export default withStyles(styles)(AppGroup);
