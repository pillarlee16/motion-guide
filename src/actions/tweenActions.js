export const ADD_TWEEN = 'ADD_TWEEN';
export const REMOVE_TWEEN = 'REMOVE_TWEEN';
export const SELECT_TWEEN = 'SELECT_TWEEN';

export function addTween () {
  return {
    type: ADD_TWEEN,
    payload: {
      objectID: String(parseInt(Math.random() * 100, 10)),
      duration: 300,
      delay: 500,
      property: 'Opacity',
      from: [0],
      to: [1],
      easing: 'Airy',
    }
  }
};

export function removeTween (index) {
  return {
    type: REMOVE_TWEEN,
    payload: {
      index,
    },
  };
};

export function selectTween (index) {
  return {
    type: SELECT_TWEEN,
    payload: {
      index,
    },
  };
};
