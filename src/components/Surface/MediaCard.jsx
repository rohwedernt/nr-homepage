import React, { useState } from 'react';
import ReactPlayer from 'react-player'

// @material-ui/core components
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';


const useStyles = makeStyles(() => ({
  root: {
    minWidth: 350,
    maxWidth: 350,
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
    minHeight: '35px',
    maxHeight: '35px',
    overflow: 'hidden'
  }
}));

export default function MediaCard(props) {
  const classes = useStyles();
  const [playing, setPlaying] = useState(false);
  const { title, desc, url } = props;

  return (
    <Card className={classes.root} elevation={3}>
        <CardActionArea className={classes.cardMedia} onClick={() => setPlaying(!playing)}>
            <ReactPlayer height='150' width='350' url={url} playing={playing} />
        </CardActionArea>
        <CardContent className={classes.cardContent}>
              <Typography 
                className={classes.title} 
                variant="subtitle1" 
                component="h2"
                title={title}
                >
                  {title}
              </Typography>
              <Typography variant="caption" color="textSecondary" component="p" title={desc}>
                  {desc}
              </Typography>
          </CardContent>
    </Card>
  );
}
