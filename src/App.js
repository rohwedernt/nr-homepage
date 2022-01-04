import React from 'react';
import ProfilePage from './views/ProfilePage';

// @material-ui
import CssBaseline from '@material-ui/core/CssBaseline'
//import { createMuiTheme } from '@material-ui/core/styles';
//import { ThemeProvider } from '@material-ui/styles';

import { Route, Switch } from 'react-router-dom';
import AdminPage from './views/Admin/AdminPage';
import DevContainer from './views/Containers/DevContainer';
import CustomThemeProvider from './themes/CustomThemeProvider';

// stylesheets
import '@aws-amplify/ui/dist/style.css';

function App() {
  return (
    <CustomThemeProvider>
      <CssBaseline />
      <ProfilePage />
      {/* <Switch>
        <Route exact path='/' render={() =>  <ProfilePage />} />
        <Route path="/admin" render={() => <AdminPage />} />
      </Switch> */}
    </CustomThemeProvider>
  );
}

export default App

// Go to AWS AppSync -> Settings
// Create a new API key
// aws-exports.js and update to new api key