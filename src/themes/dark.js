import { createMuiTheme } from '@material-ui/core/styles'

// Dark theme
const theme = createMuiTheme({
    palette: {
        type: 'dark',
        primary: {
            main: '#76a2c5'
        },
        secondary: {
            main: '#000'
        },
        common: { 
            background: '#424242', 
            paper: '#191919', 
            footer: '#696969'
        }
    },
    typography: {
        'fontFamily': `'Montserrat', sans-serif`
    }
})

export default theme
