import { BrowserRouter as Router, Route } from 'react-router-dom';
import React, { Component } from 'react';
import Navbar from './components/Navbar';
import Jumbotron from './components/Jumbotron';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Navbar />
          <Jumbotron />
        </div>
      </Router>
    );
  }
}

export default App;
