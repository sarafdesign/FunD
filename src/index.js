import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App';


ReactDOM.render(
  // <React.StrictMode>
  <React.Fragment>
  <BrowserRouter>
      <App />
      </BrowserRouter>
  </React.Fragment>,document.getElementById('root')
);