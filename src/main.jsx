import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './styles.scss';
import App from './App.jsx';
import './styles.scss';

createRoot( document.getElementById( 'root' )).render(
  <StrictMode>
    <App />
  </StrictMode>,
);