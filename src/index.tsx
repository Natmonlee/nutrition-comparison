import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './index.scss';

const rootElement: HTMLElement | null = document.getElementById('root');

if (rootElement) {
  const root: ReactDOM.Root = ReactDOM.createRoot(rootElement);  
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
}


