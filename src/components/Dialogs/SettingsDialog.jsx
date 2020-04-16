import React, { Fragment, useState } from 'react';
import { TwitterPicker } from 'react-color'

// @material-ui/core components
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';
import Box from '@material-ui/core/Box';

// @material-ui/core colors
import indigo from '@material-ui/core/colors/indigo';

// custom components
import CustomDialog from './CustomDialog';
import { Typography, Divider } from '@material-ui/core';

export default function MenuAppBar(props) {
    const [ background, setBackground ] = useState(indigo);
    const { setOpenAlert, toggleHeightForAlert, setPrimaryColor, ...rest } = props;

    const handleChangeComplete = (color) => { setBackground(color.hex); };

    return (
        <CustomDialog
            dialogTitle='Settings'
            confirmText='Save'
            confirmFunc={() => {
                console.log('confirm func ran')
                setPrimaryColor(background);
                setOpenAlert(true);
                toggleHeightForAlert();
            }}
            content={() => (
                <div style={{ display: 'flex', justifyContent: 'space-around', alignItems: 'center' }}>
                    <Box>
                        <Typography variant='subtitle1' component='div'>Set Primary Color</Typography>
                        <TwitterPicker 
                            triangle='hide'
                            colors={['#f44336', '#e91e63', '#9c27b0', '#673ab7', '#3f51b5', '#2196f3', '#03a9f4', '#00bcd4', '#009688', '#4caf50', '#8bc34a', '#cddc39', '#ffeb3b', '#ffc107', '#ff9800', '#ff5722']}
                            color={background} 
                            onChangeComplete={handleChangeComplete} 
                        />
                    </Box>
                    <Divider />
                    <Box>
                        <FormControlLabel disabled control={<Switch />} label='Dark Mode' />
                        <Typography variant='body1' component='span'>(Upcoming)</Typography>
                    </Box>
                </ div>
            )}
            {...rest}
        />
  );
}
