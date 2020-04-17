import React from 'react';

// @material-ui/core components
import TextField from '@material-ui/core/TextField';

// custom components
import CustomDialog from './CustomDialog';

export default function EmailDialog(props) {
    const { setOpenAlert, ...rest } = props;

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
