import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import Amplify from 'aws-amplify';
import awsExports from './aws-exports';
import { createBrowserHistory } from 'history';
import { Router } from 'react-router';
import App from './App';

// stylesheets
import './index.css';
import '@aws-amplify/ui/dist/style.css';


Amplify.configure(awsExports);

var hist = createBrowserHistory();

ReactDOM.render(
    <Router history={hist}>
        <App />
    </Router>,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();