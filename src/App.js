import React, { useState } from 'react';
import ProfilePage from './views/ProfilePage';

// @material-ui
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';

import { Route, Switch } from 'react-router-dom';
import AdminPage from './views/Admin/AdminPage';

// stylesheets
import '@aws-amplify/ui/dist/style.css';
import { FormatListBulleted } from 'material-ui-icons';

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
  const [themeColor, setThemeColor] = useState('#1f2833');
  const [themeType, setThemeType] = useState(false); //true = dark

  const handleThemeChange = theme => {
    setTheme(theme)
  };

  return (
    <ThemeProvider theme={theme}>
      <Switch>
        <Route exact path='/' render={
          () => 
            <ProfilePage
              handleThemeChange={handleThemeChange} 
              themeColor={themeColor}
              setThemeColor={setThemeColor}
              themeType={themeType}
              setThemeType={setThemeType}
            />
        } />
        <Route path="/admin" render={() => <AdminPage />} />
      </Switch>
    </ThemeProvider>
  );
}

export default App

// Go to AWS AppSync -> Settings
// Create a new API key
// aws-exports.js and update to new api key