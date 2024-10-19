import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import App from './App'; // Adjust the path as necessary
import Front from './Frontend'; // Import Front.js

const App1 = () => {
  return (
    <Router>
      <Routes>
        <Route path="/app" component={App} />
        <Route path="/front" component={Front} /> {/* Route for Front.js */}
      </Routes>
    </Router>
  );
};

export default App1;
