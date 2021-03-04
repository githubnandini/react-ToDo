import React from 'react';
import ReactDOM from 'react-dom';
import App from './Components/App'
import Header from './Components/Header';
import './Components/Todo.css'

ReactDOM.render(
  <>
  <div className = "toDoMain">
  <Header />
  <App  />
  </div>
  </>,
  document.getElementById('root')
);

