import React from 'react';
import ReactDOM from 'react-dom/client';
import GlobalStyle from './styles/globalstyles'
import Routes from './routes'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <GlobalStyle/>
    <Routes/>
  </React.StrictMode>
);

