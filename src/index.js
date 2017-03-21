// Dependencies
import ReactDOM from 'react-dom';
import React, { Component } from 'react';
import { render }           from 'react-dom';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import { createHistory } from 'history';

// Bootstrap Twitter
import 'bootstrap/dist/js/bootstrap.min';
import 'bootstrap/dist/css/bootstrap.min.css';

// Styles
import './styles/main.scss';

// Components
import App from './components/App';
import SearchBar from './components/SearchBar';
import Login from './components/Login';
import User from './components/User';

class Root extends Component {
  render() {
    return (
        <Router history={hashHistory}>
          <Route path="/" component={App}>
            <IndexRoute component={Login} />
            <Route path="/user/:accessToken/:refreshToken" component={User} />
            <Route path="/error/:errorMsg" component={SearchBar} />
            <Route path="/search" component={SearchBar} />
            <Route path="/logout" component={Login} />
            <Route path="/album/:album_id" component={SearchBar} />
          </Route>
        </Router>
    );
  }
}

// Renders the Root Application
const rootElement = document.getElementById('app');
render(<Root />, rootElement);
