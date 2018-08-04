import { combineReducers } from 'redux'
import selection from './selection.js';
import tweens from './tweens.js';


export default combineReducers({
  selection,
  tweens,
});
