import React, { Component } from 'react';

import './App.css';
import Header from './containers/header/header';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <p className="App-intro">
          Hey, baby nora
        </p>
      </div>
    );
  }
}

export default App;
