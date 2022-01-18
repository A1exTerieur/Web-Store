import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Header from './components/header/Header.js'
import NavBarApp from './components/NavBarApp/NavBarApp.jsx'
import Body from './components/body/Body.js'
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
