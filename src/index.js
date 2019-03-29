import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Logo from './components/logo.js';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
    <BrowserRouter>
        <Switch>
            <Route path="/" exact={true} component={App} />
            <Route path="/cards" component={Logo} />
            <Route path="/logo" component={Logo} />
        </Switch>
    </ BrowserRouter>
    , document.getElementById('root'));
serviceWorker.unregister();
