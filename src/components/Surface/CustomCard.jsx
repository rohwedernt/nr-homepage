import React from 'react';

// @material-ui/core components
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import IconButton from '@material-ui/core/IconButton';

// @material-ui/icons
import ShareIcon from '@material-ui/icons/Share';

// assets
import testImgForCard from '../../assets/img/ump.jpg'


const useStyles = makeStyles(() => ({
  root: {
    maxWidth: 345,
  },
  cardMedia: {
    height: 140,
  }
}));

export default function CustomCard() {
  const classes = useStyles();

  return (
    <Card className={classes.root} elevation={3}>
        <CardActionArea>
            <CardMedia
                className={classes.cardMedia}
                image={testImgForCard}
                title="Contemplative Reptile"
            />
            <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
                Umphrey's Mcgee
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
                Shredding it all the time round the clock non stop 24 7
            </Typography>
            </CardContent>
        </CardActionArea>
        <CardActions style={{ justifyContent: 'flex-end' }}>
            <IconButton aria-label="share" color="primary">
                <ShareIcon />
            </IconButton>
        </CardActions>
    </Card>
  );
}
