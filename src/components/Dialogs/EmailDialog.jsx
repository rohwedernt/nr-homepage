import React, { useState } from 'react';

// @material-ui/core components
import TextField from '@material-ui/core/TextField';

// custom components
import CustomDialog from './CustomDialog';

export default function EmailDialog(props) {
    const [value, setValue] = useState('');
    const { setOpenAlert, ...rest } = props;

    const handleChange = (event) => setValue(event.target.value);

    return (
        <CustomDialog
            dialogTitle='Contact'
            confirmText='Send'
            confirmFunc={() => {
                setOpenAlert(true);
            }}
            content={() => (
                <TextField
                    id='outlined-multiline-static'
                    label='Email me'
                    onChange={handleChange}
                    value={value}
                    multiline
                    rows={8}
                    variant='outlined'
                    fullWidth
                />
            )}
            {...rest}
        />
  );
}
