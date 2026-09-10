import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import HomePage from './landing_page/home/HomePage';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <div>
      <HomePage/>
    </div>
    
  </React.StrictMode>
);


