import React from 'react';
import { useForm, Controller } from 'react-hook-form';
import { API, graphqlOperation } from 'aws-amplify';

// @material-ui/core components
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Button from '@material-ui/core/Button';

import { getDeleteQueryForType } from '../Utilities/getQueryForType';


function DeleteItemForm(props) {
    const { classes, onSuccess } = props;
    const { register, control, handleSubmit } = useForm();
	const onSubmit = data => deleteItems(data);
	
	async function deleteItems(data) {
		let input = { input: {id: data.id} }
        let query = getDeleteQueryForType(data.type)

        try {
            const deletedItem = await API.graphql(graphqlOperation(query, input));
            console.log(`${data.type} item deleted: ${deletedItem.name}`);   
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
            <Typography variant='h6'>Delete Item</Typography>
                <FormControl className={classes.formControl}>
                    <InputLabel >Item Type</InputLabel>
                    <Controller as={Select} name='type' control={control} defaultValue='link'>
                        <MenuItem value={'link'}>Link</MenuItem>
                        <MenuItem value={'music'}>Music</MenuItem>
                        <MenuItem value={'image'}>Image</MenuItem>
                    </Controller>
                </FormControl>
            <TextField className={classes.input} label='ID' name='id' inputRef={register} />
            <Button className={classes.button} variant='outlined' color='primary' type='submit'>Submit</Button>
        </form>
    );
}

export default DeleteItemForm;
