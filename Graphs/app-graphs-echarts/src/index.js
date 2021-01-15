import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Graph01 from './components/Graph01';
import Graph02 from './components/Graph02';
import Graph03 from './components/Graph03';

ReactDOM.render(
  <React.StrictMode>
    <Graph02 />
  </React.StrictMode>,
  document.getElementById('root')
);
