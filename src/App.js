import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from "./components/Header/Header"


class App extends Component {
  render() {
    return (
      <React.Fragment >
        <Header />
      </React.Fragment>
    );
  }
}

export default App;