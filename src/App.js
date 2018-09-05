import React, { Component } from 'react';

import './App.css';
import Header from './containers/header/header';
import Body from './containers/body/body';

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Body />
      </div>
    );
  }
}

export default App;
