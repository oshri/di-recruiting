import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import './App.css';

import Header from '../Header';
import Footer from '../Footer';
import Home from '../../containers/Home';
import Jobs from '../../containers/Jobs';

class App extends Component {

  render() {
    return (
      <Router basename={'/'}>
        <div className="app">
          <Header/>
          <div className="app-body">
            <Route exact path="/" component={Home} />
            <Route exact path="/jobs" component={Jobs} />
          </div>
          <Footer/>
        </div>
      </Router>
    );
  }
}

export default App;
