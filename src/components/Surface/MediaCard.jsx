import React, { useState } from 'react';
import ReactPlayer from 'react-player'

// @material-ui/core components
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import IconButton from '@material-ui/core/IconButton';

// @material-ui/icons
import LaunchIcon from '@material-ui/icons/Launch';


const useStyles = makeStyles(() => ({
  root: {
    minWidth: 350,
    maxWidth: 350
  },
  cardMedia: {
    height: 150,
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
    minHeight: '50px',
    maxHeight: '50px',
    overflow: 'hidden'
  },
  cardActions: {
    height: '35px',
    padding: '0px', 
    backgroundColor: '#f6f6f6', 
    boxShadow: 'rgba(0, 0, 0, 0.19) 0px 10px 1px, rgba(0, 0, 0, 0.23) 0px 1px 1px inset', 
    justifyContent: 'flex-end'
  }
}));

export default function MediaCard(props) {
  const classes = useStyles();
  const [playing, setPlaying] = useState(false);
  const { title, desc, url } = props;

  return (
    <Card className={classes.root} elevation={3}>
        <CardActionArea className={classes.cardMedia} onClick={() => setPlaying(!playing)}>
            <ReactPlayer 
              height='150px' 
              width='350px' 
              url={url} 
              playing={playing}
              config={{ youtube: { playerVars: { 'origin': window.location.origin } } }}
              light
              controls
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
          <CardActions className={classes.cardActions}>
            <IconButton color='primary' onClick={() => window.open(url, '_blank')}>
                <LaunchIcon />
            </IconButton>
        </CardActions>
    </Card>
  );
}
