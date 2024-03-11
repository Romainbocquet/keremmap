import React from 'react';
import { createRoot } from 'react-dom/client';
import Root from './routes/Root';
import './assets/css/index.css'

const rootElement = document.getElementById('root');

createRoot(rootElement).render(
  <React.StrictMode>
    <Root />
  </React.StrictMode>
);