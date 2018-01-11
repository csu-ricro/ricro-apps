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
  ListItemIcon,
} from 'material-ui/List';
import IconButton from 'material-ui/IconButton';
import Divider from 'material-ui/Divider';
import Avatar from 'material-ui/Avatar';
import Typography from 'material-ui/Typography';
import Tooltip from 'material-ui/Tooltip';

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
    <Typography type='title'>
      {props.appGroup.name}
    </Typography>
  );
  return (
    <div>
      {groupHeader}
      <List>
        <Divider />
        {props.appGroup.apps.map((app, i) => {
          return(
            <div key={i}>
              <a href={app.link} className={props.classes.appLink}>
                <ListItem
                  divider={props.appGroup.apps.length-1 !== i}
                  button
                  >
                  <Avatar className={props.classes.avatar}>
                    <Icon>{app.icon == null ? 'apps' : app.icon}</Icon>
                  </Avatar>
                  <ListItemText primary={app.name} secondary={app.description} />
                  {app.protected ? (
                    <Tooltip title='Requires login'>
                      <ListItemIcon aria-label='Requires login'>
                        <Icon>lock</Icon>
                      </ListItemIcon>
                    </Tooltip>
                  ) : null}
                  <ListItemSecondaryAction>
                    <Tooltip title='Open'>
                      <IconButton aria-label='Open'>
                        <Icon>keyboard_arrow_right</Icon>
                      </IconButton>
                    </Tooltip>
                  </ListItemSecondaryAction>
                </ListItem>
              </a>
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