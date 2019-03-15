import React, { Component } from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';

import Home from './screens/Home';
import Movies from './components/Movies';
import Search from './components/Search';
import PageError from './screens/PageError/PageError';
import NavBar from './components/NavBar/NavBar';


class Router extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <NavBar/>
          <Redirect
            from="/"
            to="/home" />
          <Switch>
            <Route
              path="/home"
              component={Home} />
            <Route exact path="/Nosotros" component={Home} />
            <Route exact path="/Busqueda" component={Search} />
            <Route path="/Topics/:topicId" component={Movies} />
            <Route component={PageError} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default Router;










/*
import React from 'react';

import {
  Route,
  Link,
  Switch,
  Redirect
} from 'react-router-dom';


//import Home from '../components/Movie';
import Search from './components/Search';
//import Nuevas from './components/Nuevas';
import Home from './screens/Home';
//import Movies from './components/Movies';
import Movies from './components/Movies';


const AppRouter = () => (
      <div>
        <div className="menu">
            <ul>
              <li> <Link to="/">Home</Link> </li>
              <li> <Link to="/Search/movies">Busqueda</Link></li>
              <li> <Link to="/about">About</Link> </li>
            </ul>
        </div>
        
        <div className="App-intro">
          <Switch>
            <Route exact path="/"  component={Home} />
            <Route path="/search/movies" component={Search/Movies} />
            <Route path="/about" component={Home} />
            <Redirect to="/" />
          </Switch>
        </div>
      </div>
    );


export default AppRouter;*/
