import React from 'react';
import { useForm, Controller } from 'react-hook-form';
import { API, graphqlOperation } from 'aws-amplify';

// @material-ui/core components
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Button from '@material-ui/core/Button';

import { getUpdateQueryForType } from '../Utilities/getQueryForType';


function UpdateItemForm(props) {
    const { classes, onSuccess } = props;
    const { register, control, handleSubmit } = useForm();
    const onSubmit = data => updateItem(data);

	async function updateItem(data) {
        let input = {input: {
            name: data.name,
            description: data.description,
            url: data.url,
            linkItemImageId: data.imageId,
            type: data.type,
            date: data.date,
            myContent: data.myContent
        }}
        let query = getUpdateQueryForType(data.type)
        try {
            const updatedItem = await API.graphql(graphqlOperation(query, input));
            console.log(`${data.type} item updated:`, updatedItem);   
        } catch (err) { console.log('error listing items') };

        onSuccess();
    }

    return (
        <form 
            className={classes.form}
            onSubmit={handleSubmit(onSubmit)}
            noValidate 
            autoComplete='off'
        >
            <Typography variant='h6'>Update Item</Typography>
                <FormControl className={classes.formControl}>
                    <InputLabel >Item Type</InputLabel>
                    <Controller as={Select} name='type' control={control} defaultValue='link'>
                        <MenuItem value={'link'}>Link</MenuItem>
                        <MenuItem value={'music'}>Music</MenuItem>
                        <MenuItem value={'image'}>Image</MenuItem>
                    </Controller>
                </FormControl>
            <TextField className={classes.input} label='ID' name='id' inputRef={register} />
            <TextField className={classes.input} label='Name' name='name' inputRef={register} />
            <TextField className={classes.input} label='Description' name='description' inputRef={register} />
            <TextField className={classes.input} label='Image Id' name='imageId' inputRef={register} helperText='N/A for image or song type' />
            <TextField className={classes.input} label='Url' name='url' inputRef={register} />
            <TextField className={classes.input} label='Date' name='date' inputRef={register} helperText='YYYY-MM-DD' />
            <FormControlLabel 
                className={classes.controlLabel}
                control={<Controller as={<Checkbox color='primary' />} name='myContent' control={control} defaultValue={false} helperText='N/A for image or song type' />}
                label='My Content'
            />
            <Button className={classes.button} variant='outlined' color='primary' type='submit'>Submit</Button>
        </form>
    );
}

export default UpdateItemForm;
