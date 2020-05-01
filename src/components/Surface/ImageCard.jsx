import React from 'react';

// @material-ui/core components
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';


const useStyles = makeStyles(() => ({
  root: {
    minWidth: 300,
    width: 600,
    maxWidth: 600,
  },
  media: {
      height: '600px'
  }
}));

export default function ImageCard(props) {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardMedia
        className={classes.media}
        image={props.image.url}
      />
    </Card>
  );
}
