import React, { useState } from 'react';

// @material-ui/core components
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';

// assets
import nothingToSeeHere from '../../assets/img/nothingtoseehere.jpg';

const useStyles = makeStyles(() => ({
  gridItem: {
    margin: '15px'
  },
  card: {
    minWidth: 320,
    maxWidth: 320,
  },
  cardMedia: {
    height: 200,
  },
}));

export default function ProfileSectionTabs(props) {
  const classes = useStyles();

  return (
    <Grid item className={classes.gridItem}>
        <Card className={classes.card}>
            <CardMedia className={classes.cardMedia} image={nothingToSeeHere} />
        </Card>
    </Grid>
  );
}
