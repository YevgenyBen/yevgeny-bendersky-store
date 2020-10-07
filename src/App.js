import React from 'react';
import logo from './logo.svg';
import './App.css';


import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import Header from './components/Header'
import Store from './pages/Store'
import Cart from './pages/Cart'
import Product from './pages/Product'

function App() {
  return (
    <div className="App">
      <Router>
        <Header/>
        <Switch>
          <Route exact path="/">
            <Store />
          </Route>
          <Route exact path="/cart">
            <Cart />
          </Route>
          <Route path="/product/:id">
            <Product />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
