import React, { Component } from 'react';
import './index.css';

import Tween from './Tween.js';


const data = {
  tweens: [
    {
      objectID: '1',
      duration: 300,
      delay: 500,
      property: 'Opacity',
      from: [0],
      to: [1],
      easing: 'Airy',
    },
    {
      objectID: '1',
      duration: 400,
      delay: 1200,
      property: 'Opacity',
      from: [0],
      to: [1],
      easing: 'BounceBack',
    },
    {
      objectID: '2',
      duration: 600,
      delay: 500,
      property: 'Position',
      from: [0, 0],
      to: [100, 0],
      easing: 'Basic',
    },
    {
      objectID: '3',
      duration: 300,
      delay: 500,
      property: 'Scale',
      from: ['100%', 0],
      to: ['110%', 0],
      easing: 'SineEaseOut',
    },
    {
      objectID: '1',
      duration: 300,
      delay: 500,
      property: 'Opacity',
      from: [0],
      to: [1],
      easing: 'Airy',
    },
    {
      objectID: '1',
      duration: 400,
      delay: 1200,
      property: 'Opacity',
      from: [0],
      to: [1],
      easing: 'BounceBack',
    },
    {
      objectID: '2',
      duration: 600,
      delay: 500,
      property: 'Position',
      from: [0, 0],
      to: [100, 0],
      easing: 'Basic',
    },
    {
      objectID: '3',
      duration: 300,
      delay: 500,
      property: 'Scale',
      from: ['100%', 0],
      to: ['110%', 0],
      easing: 'SineEaseOut',
    },
    {
      objectID: '1',
      duration: 300,
      delay: 500,
      property: 'Opacity',
      from: [0],
      to: [1],
      easing: 'Airy',
    },
    {
      objectID: '1',
      duration: 400,
      delay: 1200,
      property: 'Opacity',
      from: [0],
      to: [1],
      easing: 'BounceBack',
    },
    {
      objectID: '2',
      duration: 600,
      delay: 500,
      property: 'Position',
      from: [0, 0],
      to: [100, 0],
      easing: 'Basic',
    },
    {
      objectID: '3',
      duration: 300,
      delay: 500,
      property: 'Scale',
      from: ['100%', 0],
      to: ['110%', 0],
      easing: 'SineEaseOut',
    },
    {
      objectID: '1',
      duration: 300,
      delay: 500,
      property: 'Opacity',
      from: [0],
      to: [1],
      easing: 'Airy',
    },
    {
      objectID: '1',
      duration: 400,
      delay: 1200,
      property: 'Opacity',
      from: [0],
      to: [1],
      easing: 'BounceBack',
    },
    {
      objectID: '2',
      duration: 600,
      delay: 500,
      property: 'Position',
      from: [0, 0],
      to: [100, 0],
      easing: 'Basic',
    },
    {
      objectID: '3',
      duration: 300,
      delay: 500,
      property: 'Scale',
      from: ['100%', 0],
      to: ['110%', 0],
      easing: 'SineEaseOut',
    },
  ],
};

console.log(data);

const MAX_DURATION = 3000;

class Timeline extends Component {
  render() {

    const tweens = data.tweens;

    return (
      <div className="timeline">
        <div className="inner">
          <div className="timeline-grid">
            <div className="vline-zero"></div>
            <div className="hline-zero"></div>
            <div className="timeline-grid-inner">
              {
                [...Array(10)].map((x, i) =>
                  (i < 9)
                    ? <div key={ i } className="vline" style={ { left: `${(i + 1) / 10 * 100}%` } }></div>
                    : <div key={ i } className="vline-last" style={ { left: `${(i + 1) / 10 * 100}%` } }></div>
                )
              }
            </div>
          </div>
          <div className="tween-area">
            <div className="tween-area-inner">
            {
              tweens.map((tween, index) =>
                <Tween key={ index } {...tween} maxDuration={ MAX_DURATION } />
              )
            }
            </div>
          </div>

        </div>
      </div>
    )
  }
}

export default Timeline;
