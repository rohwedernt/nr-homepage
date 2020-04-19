import React from 'react';

// @material-ui/core components
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Skeleton from '@material-ui/lab/Skeleton';
import Box from '@material-ui/core/Box';


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
    minHeight: '85px',
    maxHeight: '85px',
    overflow: 'hidden'
  }
}));

export default function CustomCard(props) {
  const classes = useStyles();
  const { title, description, img, onClick, isLoading } = props;

  return (
    !isLoading ? (
      <Card className={classes.root} elevation={3}>
        <CardActionArea onClick={onClick}>
          <CardMedia
            className={classes.cardMedia}
            image={img}
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
            <Typography variant='caption' color='textSecondary' component='p' title={description}>
                {description}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    ) : (
      <Box>
        <Skeleton variant="rect" width={250} height={180} />
        <Skeleton />
        <Skeleton width="60%" />
      </Box>
    )
  );
}
