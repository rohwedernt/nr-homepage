import React, { useState } from 'react';
import ProfilePage from './views/ProfilePage/ProfilePage';
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import './App.css'


let defaultTheme = createMuiTheme({
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

export default App;
