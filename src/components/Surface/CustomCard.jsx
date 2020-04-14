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


const useStyles = makeStyles(() => ({
  root: {
    minWidth: 250,
    maxWidth: 250,
  },
  cardMedia: {
    height: 140,
    verticalAlign: 'middle'
  },
  title: {
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    textOverflow: 'ellipsis'
  },
  cardContent: {
    minHeight: '99px',
    maxHeight: '99px'
  }
}));

export default function CustomCard(props) {
  const classes = useStyles();
  const { title, desc, img, url, sharUrl } = props;

  return (
    <Card className={classes.root} elevation={3}>
        <CardActionArea onClick={() => { window.open(url, '_blank') }}>
            <CardMedia
                className={classes.cardMedia}
                image={img}
                title={title}
            />
            <CardContent className={classes.cardContent}>
              <Typography 
                className={classes.title} 
                gutterBottom 
                variant="h6" 
                component="h2"
                title={title}
                >
                  {title}
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p" title={desc}>
                  {desc}
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
