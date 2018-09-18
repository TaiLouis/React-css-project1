import React, { Component } from 'react';
import Header from "./components/Header/Header"
import Main from "./components/Main"
import Feature from "./components/Feature"
import "../src/sass/main.scss"


class App extends Component {
  render() {
    return (
      <React.Fragment >
        <Header />
        <Main/>
        <Feature/>
      </React.Fragment>
    );
  }
}

export default App;
