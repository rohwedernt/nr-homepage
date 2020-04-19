import React, { useState } from 'react';
import ProfilePage from './views/ProfilePage';
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
//import { withAuthenticator } from 'aws-amplify-react'
import './App.css'


let defaultTheme = createMuiTheme({
  palette: {
    primary: {
      main: '#1f2833'
    }
  },
  typography: {
    'fontFamily': `'Montserrat', sans-serif`,
   }
});

function App() {
  const [theme, setTheme] = useState(defaultTheme);

  const onChangePrimaryColor = color => {
    setTheme(createMuiTheme({
      ...defaultTheme,
      palette: { primary: { main: color } }
    }));
  };

  return (
    <ThemeProvider theme={theme}>
      <ProfilePage setPrimaryColor={onChangePrimaryColor} />
    </ThemeProvider>
  );
}

export default App
//export default withAuthenticator(App)
