import React from 'react';
import ReactDOM from 'react-dom/client'; // Updated import
import './styles/global-styles.css';

import { Home } from './templates/Home';

// Create a root
const root = ReactDOM.createRoot(document.getElementById('root'));

// Render the app
root.render(
  <React.StrictMode>
    <Home />
  </React.StrictMode>
);
