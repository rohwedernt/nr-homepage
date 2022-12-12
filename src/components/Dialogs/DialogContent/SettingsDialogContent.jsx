import React, { useContext } from 'react';
//import { CirclePicker } from 'react-color'

// @material-ui/core components
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';
import Box from '@material-ui/core/Box';

// custom components
//import { Typography, Divider } from '@material-ui/core';
import { CustomThemeContext } from '../../../themes/CustomThemeProvider';

// function lightenColorArr(colorArr, amt) {
//     colorArr.map(col => {
//         var num = parseInt(col, 16);
//         var r = (num >> 16) - amt;
//         var b = ((num >> 8) & 0x00FF) - amt;
//         var g = (num & 0x0000FF) - amt;
//         var newColor = g | (b << 8) | (r << 16);
//         return newColor.toString(16);
//     });
// }

export default function SettingsDialog(props) {
    const { currentTheme, setTheme } = useContext(CustomThemeContext)
    const isDark = Boolean(currentTheme === 'dark')
    //const colors = ['#3f51b5', '#aa2e25', '#a31545', '#6d1b7b', '#482880', '#1769aa','#0276aa', '#008394', '#00695f', '#357a38', '#324a16', '#255c40', '#963111', '#05386b', '#302f35', '#501b1d', '#1f2833'];

    const handleThemeChange = (event) => {
        const { checked } = event.target;
        checked ? setTheme('dark') : setTheme('normal');
    }

    return (
        <div style={{ display: 'flex', justifyContent: 'space-around', alignItems: 'center' }}>
            {/* <Box style={{textAlign: 'center', marginRight: '15px' }}>
                <Typography gutterBottom variant='subtitle1' component='div'>Set Theme Color</Typography>
                <CirclePicker 
                    triangle='hide'
                    colors={isDark ? lightenColorArr(colors, 1) : colors}
                    color={currentTheme.palette && currentTheme.palette.primary.main} 
                    onChangeComplete={handleThemeChange} 
                />
            </Box>
            <Divider /> */}
            <Box style={{textAlign: 'center' }}>
                <FormControlLabel control={<Switch color='primary' checked={isDark} onChange={handleThemeChange} />}
                    label='Dark Mode'
                    style={{ marginRight: '0px' }}
                />
            </Box>
        </div>
    );
}
