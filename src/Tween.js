import React, { Component } from 'react';
import './Tween.css';

class Tween extends Component {
  render() {
    const {
      objectID,
      duration,
      delay,
      property,
      easing,
      from,
      to,
      maxDuration,
    } = this.props;

    const delayStyle = {
      width: `${ delay / maxDuration * 100 }%`
    }

    const barStyle = {
      left: `${ delay / maxDuration * 100 }%`,
      width: `${ duration / maxDuration * 100 }%`
    };
    const easingStyle = {
      left: `calc(${(duration + delay) / maxDuration * 100}% + 20px)`
    };

    return (
      <div className="tween">
        <div className="tween__delay" style={ delayStyle }>
          <div className="tween__left_boundary"></div>
          <div className="tween__right_boundary"></div>
          <div className="tween__duration_bar"></div>
          <div className="tween__duration">{ delay }ms</div>
        </div>
        <div className="tween__bar" style={ barStyle }>
          <div className="tween__from">{ from[0] }</div>
          <div className="tween__to">{ to[0] }</div>
          <div className="tween__left_boundary"></div>
          <div className="tween__right_boundary"></div>
          <div className="tween__duration_bar"></div>
          <div className="tween__duration">{ duration }ms</div>
        </div>
        <div className="tween__easing" style={ easingStyle }>
          { easing }
        </div>
        <div className="tween__property">
          { property }
        </div>
        <div className="tween__object_id">
          { objectID }
        </div>
      </div>
    )
  }
}

export default Tween;
