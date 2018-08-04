import {
  SELECT_TWEEN,
} from '../actions/tweenActions.js';

const selection = (state = null, action) => {
  switch (action.type) {
    case SELECT_TWEEN:
      const payload = action.payload;
      return payload.index;
    default:
      return state;
  }
}

export default selection;
