import React from 'react';
import ReactDOM from 'react-dom/client';
import StarWarsApp from './components/StarWarsApp';
import HeaderApp from './components/HeaderApp';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <HeaderApp />
    <StarWarsApp />
  </React.StrictMode>
);
