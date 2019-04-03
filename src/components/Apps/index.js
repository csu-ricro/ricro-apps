import Grid from '@material-ui/core/Grid';
import React from 'react';
import appGroups from '../../assets/app-groups';
import AppGroup from '../AppGroup';

const Apps = () => {
  const gridRows = appGroups.reduce(
    (rows, appGroup, i) =>
      (i % 2 === 0 ? rows.push([appGroup]) : rows[rows.length - 1].push(appGroup)) && rows,
    [],
  );
  return gridRows.map(row => (
    <Grid key={row[0].name} container>
      {row.map(appGroup => (
        <Grid key={appGroup.name} item xs={12} lg={6}>
          <AppGroup>{appGroup}</AppGroup>
        </Grid>
      ))}
    </Grid>
  ));
};

Apps.propTypes = {};

export default Apps;
