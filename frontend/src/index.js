import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap styles
import { ThemeProvider } from 'react-bootstrap'; // ThemeProvider if needed

// Get the root element
const rootElement = document.getElementById('root');

const root = ReactDOM.createRoot(rootElement);

root.render(
  
     <ThemeProvider><App /></ThemeProvider>
    
  
);



