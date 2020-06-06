import React from 'react';
import { useForm, Controller } from 'react-hook-form';
import { API, graphqlOperation } from 'aws-amplify';
import { listLinkItems, listImageItems, listMusicItems } from '../../../graphql/queries';

// @material-ui/core components
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Button from '@material-ui/core/Button';

import { ItemTypes } from '../../../data/ItemTypes';


function ListItemsForm(props) {
    const { classes, onSuccess } = props;
    const { register, control, handleSubmit } = useForm();
    const onSubmit = data => {
        switch (data.type) {
            case ItemTypes.link:
                fetchLinkItems(data);
                break;
            case ItemTypes.image:
                fetchImageItems(data);
                break;
            case ItemTypes.music:
                fetchMusicItems(data);
                break;
            default: console.log('invalid type for query');
                break;
        }
    }

    async function fetchLinkItems(data) {
        let filter = data.filter ? { filter: data.filter } : undefined;

        try {
            const itemData = await API.graphql(graphqlOperation(listLinkItems, filter));
            const items = itemData.data.listLinkItems.items;
            console.log(`${data.type} items found:`, items);   
        } catch (err) { console.log('error listing items') };

        onSuccess();
    }

    async function fetchImageItems(data) {
        let filter = data.filter ? { filter: data.filter } : undefined;

        try {
            const itemData = await API.graphql(graphqlOperation(listImageItems, filter));
            const items = itemData.data.listImageItems.items;
            console.log(`${data.type} items found:`, items);   
        } catch (err) { console.log('error listing items') };

        onSuccess();
    }

    async function fetchMusicItems(data) {
        let filter = data.filter ? { filter: data.filter } : undefined;

        try {
            const itemData = await API.graphql(graphqlOperation(listMusicItems, filter));
            const items = itemData.data.listMusicItems.items;
            console.log(`${data.type} items found:`, items);   
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
            <FormControl className={classes.formControl}>
                <InputLabel >Item Type</InputLabel>
                <Controller as={Select} name='type' control={control} defaultValue='link'>
                    <MenuItem value={'link'}>Link</MenuItem>
                    <MenuItem value={'music'}>Music</MenuItem>
                    <MenuItem value={'image'}>Image</MenuItem>
                </Controller>
            </FormControl>
            <TextField className={classes.input} label='Filter' name='filter' inputRef={register} helperText='ex. { myContent: { eq: true } }' />
            <Button className={classes.button} variant='outlined' color='primary' type='submit'>Submit</Button>
        </form>
    );
}

export default ListItemsForm;
