import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
// import App from './App';
// import App from './APP-REDUX';
import App from './containers/app';
import store from './redux/store';


/********** react*************/
// ReactDOM.render(
//   <App store={store} />,
//   document.getElementById('root')
// );


/********** redux *************/
// function render () {
//   ReactDOM.render(
//     <App store={store} />,
//     document.getElementById('root')
//   );
// }

// render();

// store.subscribe(() => {
//   render();
// })

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

