import React from 'react';

// @material-ui/core components
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';


const useStyles = makeStyles(() => ({
  root: {
    minWidth: 250,
    maxWidth: 250,
  },
  cardMedia: {
    height: 180,
    verticalAlign: 'middle',
    borderBottom: '1px solid #c5c5c5'
  },
  title: {
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    textOverflow: 'ellipsis'
  },
  cardContent: {
    padding: '5px 10px 5px 10px',
    minHeight: '75px',
    maxHeight: '75px',
    overflow: 'hidden'
  }
}));

export default function CustomCard(props) {
  const classes = useStyles();
  const { title, description, image, onClick } = props;

  return (
    <Card className={classes.root} elevation={3}>
      <CardActionArea onClick={onClick}>
        <CardMedia
          className={classes.cardMedia}
          image={image}
          title={title}
        />
        <CardContent className={classes.cardContent}>
          <Typography 
            className={classes.title} 
            variant='subtitle1'
            component='h2'
            title={title}
            >
              {title}
          </Typography>
          <Typography 
            variant='caption' 
            color='textSecondary' 
            component='p' 
            title={description}>
              {description}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
