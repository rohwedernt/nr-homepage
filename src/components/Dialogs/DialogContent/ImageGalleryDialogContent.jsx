import React, { useState, useEffect } from 'react';
import { API, graphqlOperation } from 'aws-amplify';
import { listImages } from '../../../graphql/queries';

// @material-ui/core components
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Skeleton from '@material-ui/lab/Skeleton';

// custom components
import ImageCard from '../../Surface/ImageCard';


const useStyles = makeStyles(() => ({
    gridItem: {
      margin: '15px'
    }
  }));

export default function ImageGalleryDialogContent({ item }) {
    const classes = useStyles();
    const [images, setImages] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        fetchImages(item.id);
    }, []);

    async function fetchImages(itemId) {
        let filters = { limit: 100, filter: { itemID: { eq: itemId } } };
    
        try {
          const imageData = await API.graphql(graphqlOperation(listImages, filters));
          const itemImages = imageData.data.listImages.items;
          setImages(itemImages);
        } catch (err) { console.log('error fetching images', err) };

        setIsLoading(false);
    }

    return !isLoading ? (
        <Grid container style={{ justifyContent: 'center' }}>
            {images && images.map((image, idx) => (
                <Grid item key={idx} className={classes.gridItem}>
                    <ImageCard image={image} />
                </Grid>
            ))}
        </Grid>
    ) : <Skeleton variant="rect" width={600} height={600} style={{ margin: '15px auto' }} />

}
