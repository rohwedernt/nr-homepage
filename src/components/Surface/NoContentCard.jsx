import React from 'react';

// @material-ui/core components
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';

// assets
import nothingToSeeHereGif from '../../assets/img/nothingtoseeheregif.gif';

const useStyles = makeStyles(() => ({
  gridItem: {
    margin: '15px'
  },
  card: {
    minWidth: 285,
    maxWidth: 285,
  },
  cardMedia: {
    height: 180,
  },
}));

export default function ProfileSectionTabs(props) {
  const classes = useStyles();

  return (
    <Grid item className={classes.gridItem}>
        <Card className={classes.card}>
            <CardMedia className={classes.cardMedia} image={nothingToSeeHereGif} />
        </Card>
    </Grid>
  );
}
