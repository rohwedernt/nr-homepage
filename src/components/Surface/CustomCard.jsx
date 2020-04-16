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
  const { title, desc, img, onClick, url, shareUrl } = props;

  return (
    <Card className={classes.root} elevation={3}>
        <CardActionArea onClick={onClick}>
            <CardMedia
                className={classes.cardMedia}
                image={img}
                title={title}
            />
        </CardActionArea>
        <CardContent className={classes.cardContent}>
              <Typography 
                className={classes.title} 
                variant='subtitle1'
                component='h2'
                title={title}
                >
                  {title}
              </Typography>
              <Typography variant='caption' color='textSecondary' component='p' title={desc}>
                  {desc}
              </Typography>
          </CardContent>
        <CardActions style={{ backgroundColor: '#f6f6f6', boxShadow: 'rgba(0, 0, 0, 0.19) 0px 10px 1px, rgba(0, 0, 0, 0.23) 0px 1px 1px inset', justifyContent: 'flex-end' }}>
            <IconButton aria-label='share' color='primary'>
                <ShareIcon />
            </IconButton>
        </CardActions>
    </Card>
  );
}
