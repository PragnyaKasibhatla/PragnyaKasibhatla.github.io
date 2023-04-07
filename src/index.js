import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App style={{backgroundImage: "url('../public/assets/2.png')"}}/>
  </React.StrictMode>
);
