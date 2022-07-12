import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './modules/home/Home';
import Candidates from './modules/candidates/Candidates';
import Projects from './modules/projects/Projects';
import Profile from './modules/profile/Profile';


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />}>
          <Route path="candidates" element={<Candidates />} />
          <Route path="profile" element={<Profile />} />
          <Route path="projects" element={<Projects />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
