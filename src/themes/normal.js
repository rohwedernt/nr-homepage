import { createMuiTheme } from '@material-ui/core/styles'

// Default theme
const theme = createMuiTheme({
    palette: {
        primary: {
            main: '#1f2833'
        },
        secondary: {
            main: '#fff'
        },
        common: {
            background: '#fff',
            paper: '#fff',
            footer: '#f6f6f6'
        }
    },
    typography: {
        'fontFamily': `'Montserrat', sans-serif`
    }
})

export default theme
