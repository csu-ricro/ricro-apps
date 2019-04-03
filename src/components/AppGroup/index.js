import Avatar from '@material-ui/core/Avatar';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';
import Divider from '@material-ui/core/Divider';
import Icon from '@material-ui/core/Icon';
import IconButton from '@material-ui/core/IconButton';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import withStyles from '@material-ui/core/styles/withStyles';
import Tooltip from '@material-ui/core/Tooltip';
import IconApps from 'mdi-material-ui/Apps';
import IconChevronRight from 'mdi-material-ui/ChevronRight';
import IconLock from 'mdi-material-ui/Lock';
import PropTypes from 'prop-types';
import React from 'react';

const styles = theme => ({
  container: {
    margin: `${theme.spacing.unit * 2}px 0`,
    [theme.breakpoints.up('md')]: { margin: `${theme.spacing.unit * 2}px` },
  },
  cardContent: {
    '&, &:last-child': { padding: 0 },
  },
  avatar: {
    color: theme.palette.csu.primary.green.main,
    background: 'none',
  },
  protected: {
    marginLeft: theme.spacing.unit * 2,
    marginRight: 0,
  },
});

const AppGroup = props => {
  const { children, classes } = props;

  return children == null ? null : (
    <div className={classes.container}>
      <Card>
        <CardHeader title={children.name} subheader={children.shortName} />
        <Divider />
        <CardContent className={classes.cardContent}>
          <List disablePadding>
            {children.apps.map((app, i) => (
              <div key={app.name}>
                <ListItem component="a" href={app.link} button>
                  <ListItemAvatar>
                    <Avatar className={classes.avatar}>
                      <Icon>{app.icon == null ? <IconApps /> : app.icon}</Icon>
                    </Avatar>
                  </ListItemAvatar>
                  {app.protected && (
                    <ListItemIcon className={classes.protected} aria-label="Requires login">
                      <Tooltip title="Requires login" placement="right">
                        <IconLock />
                      </Tooltip>
                    </ListItemIcon>
                  )}
                  <ListItemText primary={app.name} secondary={app.description} />
                  <ListItemSecondaryAction>
                    <Tooltip title="Open">
                      <IconButton aria-label="Open">
                        <IconChevronRight />
                      </IconButton>
                    </Tooltip>
                  </ListItemSecondaryAction>
                </ListItem>
                {children.apps.length - 1 !== i && <Divider />}
              </div>
            ))}
          </List>
        </CardContent>
      </Card>
    </div>
  );
};

AppGroup.propTypes = {
  children: PropTypes.object,
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(AppGroup);
