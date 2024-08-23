import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import './index.css';
import { ThemeProvider } from './components/ThemeProvider';

const rootElement = document.getElementById('root');
if (!rootElement) throw new Error('Failed to find the root element');
const root = createRoot(rootElement);
root.render(
  <React.StrictMode>
    <ThemeProvider attribute="class" defaultTheme="system">
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
