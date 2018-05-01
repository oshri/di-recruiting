import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import './App.css';

import Header from '../Header';
import Footer from '../Footer';
import Home from '../../containers/Home';

class App extends Component {

  render() {
    return (
      <Router basename={'/'}>
        <div className="app">
          <Header/>
          <div className="app-body">
            <Route exact path="/" component={Home} />
          </div>
          <Footer/>
        </div>
      </Router>
    );
  }
}

export default App;
