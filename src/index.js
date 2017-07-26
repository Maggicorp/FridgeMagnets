import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Board from './Board';
// import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  // board count is units of 5
  <Board count={2} />, document.getElementById('react-container'));
// registerServiceWorker();
