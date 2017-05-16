import React from 'react';
import FontIcon from 'material-ui/FontIcon';
import {
  List,
  ListItem
} from 'material-ui/List';
import Divider from 'material-ui/Divider';
import Avatar from 'material-ui/Avatar';

import config from './config.json';

const AppGroup = (props) => {
  if (props.appGroup == null) {
    return null;
  }
  let groupHeader = (<h4>{props.appGroup.name}</h4>);
  if (props.appGroup.shortName != null) {
    groupHeader = (<h4>{props.appGroup.name} <small>{props.appGroup.shortName}</small></h4>);
  }
  return (
    <div className='col-md-4'>
      <List>
        {groupHeader}
        <Divider />
        {props.appGroup.apps.map((app, i) => {
          return(
            <a key={i} href={app.link} style={{textDecoration:'none'}}>
              <ListItem
                leftAvatar={
                  <Avatar
                    backgroundColor={config.muiTheme.palette.primary1Color}
                    icon={<FontIcon className={app.icon} />} />
                }
                rightIcon={<FontIcon className='fa fa-angle-right' />}
                primaryText={app.name}
                secondaryText={app.description} />
            </a>
          )
        })}
      </List>
    </div>
  );
}

export default AppGroup;
