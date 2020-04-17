import React from 'react';

// @material-ui/core components
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

// custom components
import CustomDialogFullScreen from './CustomDialogFullScreen';
import ImageCard from '../Surface/ImageCard';


const useStyles = makeStyles(() => ({
    gridItem: {
      margin: '15px'
    }
  }));

export default function ImageGalleryDialog(props) {
    const classes = useStyles();
    const { data, ...rest } = props;

    return (
        <CustomDialogFullScreen
            title={data.label}
            description={data.desc}
            content={() => (
                <Grid container style={{ justifyContent: 'center' }}>
                    {data.imgs.map(img => (
                    <Grid item className={classes.gridItem}>
                        <ImageCard img={img} />
                    </Grid>
                    ))}
                </Grid>
            )}
            {...rest}
        />
  );
}
