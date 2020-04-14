import React from 'react';
import ProfilePage from './views/ProfilePage/ProfilePage';
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import './App.css'

const theme = createMuiTheme({
  typography: {
    'fontFamily': `'Montserrat', sans-serif`,
   }
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <ProfilePage />
    </ThemeProvider>
  );
}

export default App;
