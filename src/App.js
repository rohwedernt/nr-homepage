import React, { useState } from 'react';
import ProfilePage from './views/ProfilePage';

// @material-ui
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';

import { Route, Switch } from 'react-router-dom';
import AdminPage from './views/Admin/AdminPage';

// stylesheets
import '@aws-amplify/ui/dist/style.css';

let defaultTheme = createMuiTheme({
  typography: {
    'fontFamily': `'Montserrat', sans-serif`,
   }
});

const getThemePalette = (isDark, color) => {
  if (isDark) {
    return {
      primary: {
        main: color || '#1f2833'
      },
      common: {
        background: '#424242',
        paper: '#191919'
      },
      type: "dark"
    }
  } else {
    return {
      primary: {
        main: color || '#1f2833'
      },
      common: {
        background: '#fff',
        paper: '#fff'
      }
    }
  }
}

function App() {
  const [theme, setTheme] = useState(defaultTheme);

  const handleThemeChange = theme => {
    setTheme(theme)
  };

  return (
    <ThemeProvider theme={theme}>
      <Switch>
        <Route exact path='/' render={() => <ProfilePage handleThemeChange={handleThemeChange} />} />
        <Route path="/admin" render={() => <AdminPage />} />
      </Switch>
    </ThemeProvider>
  );
}

export default App

// Go to AWS AppSync -> Settings
// Create a new API key
// aws-exports.js and update to new api key