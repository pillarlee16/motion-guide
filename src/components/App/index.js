import React, { Component } from 'react';
import './index.css';

import Timeline from '../Timeline';

class App extends Component {
  render() {
    return (
      <div className="app">
        <div className="app__editor">
        </div>
        <div className="app__timeline">
          <Timeline />
        </div>
      </div>
    );
  }
}

export default App;
