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
import Tooltip from 'material-ui/Tooltip';
import Card, {
  CardHeader,
  CardContent
} from 'material-ui/Card';

const styles = theme => ({
  container: {
    margin: theme.spacing.unit * 2 + 'px ' + theme.spacing.unit + 'px',
  },
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
  const {
    appGroup,
    classes,
  } = props;

  return appGroup == null ? null : (
    <Card className={classes.container}>
      <CardHeader title={appGroup.name} subheader={appGroup.shortName}/>
      <Divider/>
      <CardContent>
        <List>
          {appGroup.apps.map((app, i) => {
            return(
              <div key={i}>
                <a href={app.link} className={classes.appLink}>
                  <ListItem
                    button
                    >
                    <Avatar className={classes.avatar}>
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
                  {appGroup.apps.length-1 !== i && (<Divider/>)}
                </a>
              </div>
            )
          })}
        </List>
      </CardContent>
    </Card>
  );
}

AppGroup.propTypes = {
  classes: PropTypes.object.isRequired,
  appGroup: PropTypes.object,
};

export default withStyles(styles)(AppGroup);