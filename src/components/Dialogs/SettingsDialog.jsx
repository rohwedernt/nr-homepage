import React, { Fragment } from 'react';

// @material-ui/core components
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';

// custom components
import CustomDialog from './CustomDialog';
import { Typography } from '@material-ui/core';

export default function MenuAppBar(props) {
    const { setOpenAlert, toggleHeightForAlert, ...rest } = props;

    return (
        <CustomDialog
            dialogTitle='Settings'
            confirmText='Save'
            confirmFunc={() => {
                setOpenAlert(true);
                toggleHeightForAlert();
            }}
            content={() => (
                <Fragment>
                    <FormControlLabel disabled control={<Switch />} label="Dark Mode" />
                    <Typography variant='body1' component='span'>(Upcoming)</Typography>
                </Fragment>
            )}
            {...rest}
        />
  );
}
