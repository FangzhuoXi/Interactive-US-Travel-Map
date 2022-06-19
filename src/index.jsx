import React from 'react';
// Import from react-dom the ability to create a root render
import { createRoot } from 'react-dom/client';
import App from './components/App.jsx';
// create the root of the app by selection where the app should be mounted in the dom
const root = createRoot(document.getElementById('root'));

root.render(<App />);
