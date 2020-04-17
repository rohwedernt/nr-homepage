import React from 'react';

// @material-ui/core components
import TextField from '@material-ui/core/TextField';

// custom components
import CustomDialog from './CustomDialog';
import { Typography } from '@material-ui/core';

export default function TextDialog(props) {
    const { text, ...rest } = props;

    return (
        <CustomDialog
            dialogTitle='About This Site'
            confirmText='Close'
            confirmFunc={() => {}}
            content={() => <Typography variant='body1'>{text}</Typography>}
            removeClose
            {...rest}
        />
  );
}
