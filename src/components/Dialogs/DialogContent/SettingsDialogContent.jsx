import React, { useState } from 'react';
import { TwitterPicker } from 'react-color'

// @material-ui/core components
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';
import Box from '@material-ui/core/Box';

// custom components
import { Typography, Divider } from '@material-ui/core';

export default function SettingsDialog({ setPrimaryColor }) {
    const [ background, setBackground ] = useState('#3f51b5');

    const handleChangeComplete = (color) => { 
        setPrimaryColor(color.hex)
        setBackground(color.hex); 
    };

    return (
        <div style={{ display: 'flex', justifyContent: 'space-around', alignItems: 'center' }}>
            <Box style={{textAlign: 'center', marginRight: '15px' }}>
                <Typography gutterBottom variant='subtitle1' component='div'>Set Theme Color</Typography>
                <TwitterPicker 
                    triangle='hide'
                    colors={['#3f51b5', '#aa2e25', '#a31545', '#6d1b7b', '#482880', '#1769aa','#0276aa', '#008394', '#00695f', '#357a38', '#324a16', '#255c40', '#963111', '#05386b', '#302f35', '#501b1d', '#1f2833']}
                    color={background} 
                    onChangeComplete={handleChangeComplete} 
                />
            </Box>
            <Divider />
            <Box style={{textAlign: 'center' }}>
                <Typography gutterBottom variant='body1' component='div'>(Coming Soon)</Typography>
                <FormControlLabel disabled control={<Switch />} label='Dark Mode' style={{ marginRight: '0px' }} />
            </Box>
        </div>
  );
}
