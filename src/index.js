import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
//import App from './App';
import reportWebVitals from './reportWebVitals';

import Main from './Components/Buyer/Main/Main';

import MainRoute from './Components/MainRoute';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>

   {/* <Main></Main> */}

   {/* <RouteLink></RouteLink> */}
   <MainRoute></MainRoute>

  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
