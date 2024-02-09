import React from 'react';
import { createRoot } from 'react-dom/client'; // Import correct pour React 18+
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { ThemeProvider } from "@aws-amplify/ui-react";
import { Amplify } from 'aws-amplify';
import "@aws-amplify/ui-react/styles.css";
import studioTheme from './ui-components/studioTheme';
import amplifyconfig from './amplifyconfiguration.json';

Amplify.configure(amplifyconfig);

const root = createRoot(document.getElementById('root')); // Utilisez createRoot pour React 18+
root.render(
  <ThemeProvider theme={studioTheme}>
      <App />
  </ThemeProvider>
);

reportWebVitals();
