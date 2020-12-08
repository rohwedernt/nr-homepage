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
      <Switch>
        <Route exact path='/' render={() => <ProfilePage setPrimaryColor={onChangePrimaryColor} />} />
        <Route path="/admin" render={() => <AdminPage setPrimaryColor={onChangePrimaryColor} />} />
      </Switch>
    </ThemeProvider>
  );
}

export default App

// Go to AWS AppSync -> Settings
// Create a new API key
// aws-exports.js and update to new api key