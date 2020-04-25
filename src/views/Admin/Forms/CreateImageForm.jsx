import React from 'react';
import { useForm } from 'react-hook-form';
import { API, graphqlOperation } from 'aws-amplify';

// @material-ui/core components
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { createImage } from '../../../graphql/mutations';


function CreateImageForm(props) {
    const { classes, onSuccess } = props;
    const { register, handleSubmit } = useForm();
    const onSubmit = data => createItem(data);

	async function createItem(data) {
        let input = {input: {
            name: data.name,
            url: data.url,
            itemID: data.itemId,
        }}

        try {
            const createdItem = await API.graphql(graphqlOperation(createImage, input));
            console.log(`${data.type} image created:`, createdItem);   
        } catch (err) { console.log('error listing items', err) };

        onSuccess();
    }

    return (
        <form 
            className={classes.form} 
            onSubmit={handleSubmit(onSubmit)}
            autoComplete='off'
            noValidate 
        >
            <Typography variant='h6'>Create Item</Typography>
            <TextField className={classes.input} label='Name' name='name' inputRef={register} />
            <TextField className={classes.input} label='Url' name='url' inputRef={register} />
            <TextField className={classes.input} label='Item Id' name='itemId' inputRef={register} />
            <Button className={classes.button} variant='outlined' color='primary' type='submit'>Submit</Button>
        </form>
    );
}

export default CreateImageForm;
