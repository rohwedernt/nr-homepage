import React, { useState, useEffect } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { API, graphqlOperation } from 'aws-amplify';
import { createImage } from '../../../graphql/mutations';
import { getImageItemsByDate } from '../../../graphql/queries';

// @material-ui/core components
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';


function AddImageToGalleryForm(props) {
    const { classes, onSuccess } = props;
    const { register, control, handleSubmit } = useForm();
    const [imageItems, setImageItems] = useState([]);
    const onSubmit = data => addImageToGallery(data);

    useEffect(() => {
        fetchImageItems();
      }, []);

	async function addImageToGallery(data) {
        let input = {input: {
            name: data.name,
            url: data.url,
            itemID: data.item,
        }}

        try {
            const createdItem = await API.graphql(graphqlOperation(createImage, input));
            console.log(`${data.name} image created:`, createdItem);   
        } catch (err) { console.log('error adding image to gallery: ', err) };

        onSuccess();
    }

    async function fetchImageItems() {
        let sort = { limit: 20, type: 'travel', sortDirection: 'DESC' };
    
        try {
          const imageItemData = await API.graphql(graphqlOperation(getImageItemsByDate, sort))
          const imageItems = imageItemData.data.getImageItemsByDate.items;
          setImageItems(imageItems);
        } catch (err) { console.log('error fetching image items for form: ', err) };
      }

    return (
        <form 
            className={classes.form} 
            onSubmit={handleSubmit(onSubmit)}
            autoComplete='off'
            noValidate 
        >
            <TextField className={classes.input} label='Name' name='name' inputRef={register} />
            <TextField className={classes.input} label='Url' name='url' inputRef={register} />
            <FormControl className={classes.formControl}>
                    <InputLabel >Item</InputLabel>
                    <Controller as={Select} name='item' control={control} defaultValue=''>
                        {imageItems.map((item, idx) => <MenuItem key={idx} value={item.id}>{item.name}</MenuItem>)}
                    </Controller>
                </FormControl>
            <Button className={classes.button} variant='outlined' color='primary' type='submit'>Submit</Button>
        </form>
    );
}

export default AddImageToGalleryForm;
