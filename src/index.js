import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { StoreProvider } from './store/Store';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
    <StoreProvider>
      <App />
    </StoreProvider>
  // </React.StrictMode>
);

reportWebVitals();
