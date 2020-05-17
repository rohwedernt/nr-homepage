import React from 'react';
import { useForm } from 'react-hook-form';
import { API, graphqlOperation } from 'aws-amplify';
import { listImages } from '../../../graphql/queries';

// @material-ui/core components
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';


function ListImagesForm(props) {
    const { classes, onSuccess } = props;
    const { register, control, handleSubmit } = useForm();
    const onSubmit = data => fetchImages(data);

    async function fetchImages(data) {
        let filter = data.filter ? { filter: data.filter } : undefined;

        try {
            const itemData = await API.graphql(graphqlOperation(listImages, filter));
            const items = itemData.data.listImages.items;
            console.log(`${data.type} images found:`, items);   
        } catch (err) { console.log('error listing items') };

        onSuccess();
    }

    return (
        <form 
            className={classes.form} 
            onSubmit={handleSubmit(onSubmit)}
            autoComplete='off'
            noValidate 
        >
            <TextField className={classes.input} label='Filter' name='filter' inputRef={register} helperText='ex. { myContent: { eq: true } }' />
            <Button className={classes.button} variant='outlined' color='primary' type='submit'>Submit</Button>
        </form>
    );
}

export default ListImagesForm;
