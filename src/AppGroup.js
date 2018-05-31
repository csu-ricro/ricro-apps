import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Icon from '@material-ui/core/Icon';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import IconButton from '@material-ui/core/IconButton';
import Divider from '@material-ui/core/Divider';
import Avatar from '@material-ui/core/Avatar';
import Tooltip from '@material-ui/core/Tooltip';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';

const styles = theme => ({
  container: {
    margin: `${theme.spacing.unit * 2}px ${theme.spacing.unit}px`,
  },
  appLink: {
    '&:hover': {
      textDecoration: 'none',
    },
  },
  avatar: {
    backgroundColor: theme.palette.csuBrand.primary.green,
  },
});

const AppGroup = props => {
  const { appGroup, classes } = props;

  return appGroup == null ? null : (
    <Card className={classes.container}>
      <CardHeader title={appGroup.name} subheader={appGroup.shortName} />
      <Divider />
      <CardContent>
        <List>
          {appGroup.apps.map((app, i) => {
            return (
              <div key={app.name}>
                <a href={app.link} className={classes.appLink}>
                  <ListItem button>
                    <Avatar className={classes.avatar}>
                      <Icon>{app.icon == null ? 'apps' : app.icon}</Icon>
                    </Avatar>
                    <ListItemText primary={app.name} secondary={app.description} />
                    {app.protected ? (
                      <Tooltip title="Requires login">
                        <ListItemIcon aria-label="Requires login">
                          <Icon>lock</Icon>
                        </ListItemIcon>
                      </Tooltip>
                    ) : null}
                    <ListItemSecondaryAction>
                      <Tooltip title="Open">
                        <IconButton aria-label="Open">
                          <Icon>keyboard_arrow_right</Icon>
                        </IconButton>
                      </Tooltip>
                    </ListItemSecondaryAction>
                  </ListItem>
                  {appGroup.apps.length - 1 !== i && <Divider />}
                </a>
              </div>
            );
          })}
        </List>
      </CardContent>
    </Card>
  );
};

AppGroup.propTypes = {
  appGroup: PropTypes.object,
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(AppGroup);
