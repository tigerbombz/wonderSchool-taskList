import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import List from './components/List';
import ListItems from './components/ListItems';

import logo from './logo.svg';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to WonderSchool</h1>
        </header>
        <BrowserRouter>
          <div>
            <Switch>
              <Route exact path="/" component={List} />
              <Route exact path="/lists/:id" component={ListItems} />
            </Switch>
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
