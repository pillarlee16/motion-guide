/*
{
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
      objectID: '2',
      duration: 600,
      delay: 500,
      property: 'Position',
      from: [0, 0],
      to: [100, 0],
      easing: 'Basic',
    },
  ],
}
*/

import {
  ADD_TWEEN,
  REMOVE_TWEEN,
} from '../actions/tweenActions.js';

const tweens  = (state = [], action) => {
  switch (action.type) {
    case ADD_TWEEN:
      const payload = action.payload;
      return [
        ...state,
        {
          objectID: payload.objectID,
          duration: payload.duration,
          delay: payload.delay,
          property: payload.property,
          from: [ ...payload.from ],
          to: [ ...payload.to ],
          easing: payload.easing,
        },
      ];
    case REMOVE_TWEEN:
      return state.filter((obj, index) => index !== action.payload.index);
    default:
      return state;
  }
}

export default tweens;
