import React, { useState } from 'react';
import { CirclePicker } from 'react-color'

// @material-ui/core components
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';
import Box from '@material-ui/core/Box';
import { createMuiTheme } from '@material-ui/core/styles';

// custom components
import { Typography, Divider } from '@material-ui/core';

export default function SettingsDialog({ handleThemeChange }) {
    const [ background, setBackground ] = useState('#3f51b5');
    const [ darkState, setDarkState ] = useState(false);

    const handleChangeComplete = (isDark, color) => {
        let colVal = typeof color == "string" ? color : color.hex;
        setDarkState(isDark);
        setBackground(colVal);
        handleThemeChange(createMuiTheme({
            typography: {
                'fontFamily': `'Montserrat', sans-serif`,
            },
            palette: isDark ? {
                primary: {
                  main: colVal
                },
                common: {
                  background: '#424242',
                  paper: '#191919',
                  footer: '#696969'
                },
                type: "dark"
            } :
            {
                typography: {
                    'fontFamily': `'Montserrat', sans-serif`,
                },
                primary: {
                    main: colVal
                    // || '#1f2833'
                },
                common: {
                    background: '#fff',
                    paper: '#fff',
                    footer: '#f6f6f6'
                }
            }
        }));
    }

    return (
        <div style={{ display: 'flex', justifyContent: 'space-around', alignItems: 'center' }}>
            <Box style={{textAlign: 'center', marginRight: '15px' }}>
                <Typography gutterBottom variant='subtitle1' component='div'>Set Theme Color</Typography>
                <CirclePicker 
                    triangle='hide'
                    colors={['#3f51b5', '#aa2e25', '#a31545', '#6d1b7b', '#482880', '#1769aa','#0276aa', '#008394', '#00695f', '#357a38', '#324a16', '#255c40', '#963111', '#05386b', '#302f35', '#501b1d', '#1f2833']}
                    color={background} 
                    onChangeComplete={(col) => {console.log('click color'); handleChangeComplete(darkState, col)}} 
                />
            </Box>
            <Divider />
            <Box style={{textAlign: 'center' }}>
                <FormControlLabel control={
                        <Switch checked={darkState} onChange={() => {console.log('click dark'); handleChangeComplete(!darkState, background)}} />
                    } label='Dark Mode' style={{ marginRight: '0px' }} />
            </Box>
        </div>
  );
}
