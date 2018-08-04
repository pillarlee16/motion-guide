import React, { Component } from 'react';
import './index.css';

import TweenListPanel from '../TweenListPanel';
import Timeline from '../Timeline';

class App extends Component {
  render() {
    return (
      <div className="app">
        <div className="app__left_section">
          <TweenListPanel />
        </div>
        <div className="app__center_section">
          <Timeline />
        </div>
        <div className="app__right_section">
        </div>
      </div>
    );
  }
}

export default App;
