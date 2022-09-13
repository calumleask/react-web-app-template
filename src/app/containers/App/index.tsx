import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import HomeRoute from '~/app/routes/Home';
import AboutRoute from '~/app/routes/About';

import './style.scss';

const App: React.FC = () => {
  return (
    <div className={'app-container'}>
      <Router>
        <Routes>
          <Route path="/" element={<HomeRoute />} />
          <Route path="/about" element={<AboutRoute />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
