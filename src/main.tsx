import React from 'react';
import ReactDOM from 'react-dom/client';
import Header from './components/header/header.tsx';
import './global.scss';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Header />
  </React.StrictMode>
);
