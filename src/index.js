import React from 'react';
import { render } from 'react-dom';
// import { createStore } from 'redux';
// import { Provider } from 'react-redux';
import './index.css';
import App from './components/App';
// import rootReducer from './reducers';
import registerServiceWorker from './registerServiceWorker';

// const store = createStore(rootReducer);

// console.log('store', store);

render(
  <App />,
  document.getElementById('root')
);

// render(
//   <Provider store={ store }>
//     <App />
//   </Provider>,
//   document.getElementById('root')
// );

registerServiceWorker();
