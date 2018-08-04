import React, { Component } from 'react';
import store from '../../store';

import './index.css';

import {
  addTween,
  removeTween,
  selectTween,
} from '../../actions/tweenActions.js';

class TweenListPanel extends Component {
  constructor(props) {
    super(props);

    const storeState = store.getState();
    this.state = {
      tweens: [ ...storeState.tweens ],
      selection: storeState.selection,
    };

    this.handleStoreChange = this.handleStoreChange.bind(this);
    this.handleAdd = this.handleAdd.bind(this);
    this.handleRemove = this.handleRemove.bind(this);
    this.handleClick = this.handleClick.bind(this);

    store.subscribe(this.handleStoreChange);
  }

  handleStoreChange() {
    const prevSelection = this.state.selection;
    const prevTweens = this.state.tweens;

    const currSelection = store.getState().selection;
    const currTweens = store.getState().tweens;

    if (prevSelection !== currSelection
      || prevTweens !== currTweens) {
      this.setState({
        tweens: [ ...currTweens ],
        selection: currSelection,
      });
    }
  }

  handleAdd() {
    // store.dispatch
    console.log('handleAdd',  addTween);
    store.dispatch(addTween());
  }

  handleRemove() {
    console.log('handleRemove');
    if (this.state.selection !== null) {
      store.dispatch(removeTween(this.state.selection));
      store.dispatch(selectTween(null));
    }
  }

  handleClick(index) {
    console.log('handleClick', index);
    store.dispatch(selectTween(index));
  }

  render() {
    const tweens = this.state.tweens;

    return (
      <div className="tween-list-panel">
        <div className="header">
          <div className="label">Tweens</div>
          <div className="add" onClick={ this.handleAdd }></div>
          <div className="remove" onClick={ this.handleRemove }></div>
        </div>
        <div className="container">
        {
          tweens.map((tween, index) => 
            <div
              key={ index }
              className="item"
              onClick={ () => { this.handleClick(index) } }>{ tween.objectID } { tween.property }</div>
          )
        }
        </div>
      </div>
    )
  }
}

export default TweenListPanel;
