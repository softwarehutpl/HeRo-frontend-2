import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Candidates from './modules/candidates/Candidates';
import Projects from './modules/projects/Projects';
import Profile from './modules/profile/Profile';
import Wrapper from './modules/wrapper/Wrapper';
import Home from './modules/home/Home';


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Wrapper />}>
          <Route index element={<Home />} />
          <Route path="candidates" element={<Candidates />} />
          <Route path="profile" element={<Profile />} />
          <Route path="projects" element={<Projects />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
