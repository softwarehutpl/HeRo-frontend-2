import React from "react";
import Provider from "./provider/Provider";
import { Routes, Route } from "react-router-dom";

import Candidates from "./modules/candidates/Candidates";
import Projects from "./modules/projects/Projects";
import Profile from "./modules/profile/Profile";
import Wrapper from "./modules/wrapper/Wrapper";
import Home from "./modules/home/Home";
import SignIn from "./modules/signin/Signin";

function App() {
  return (
    <Provider>
      <div className="App">
        <Routes>
          <Route path="signin" element={<SignIn />} />
          <Route path="/" element={<Wrapper />}>
            <Route index element={<Home />} />
            <Route path="candidates/" element={<Candidates />} />
            <Route path="candidates/:id?/:status" element={<Candidates />} />
            <Route path="profile/:id" element={<Profile />} />
            <Route path="projects" element={<Projects />} />
          </Route>
        </Routes>
      </div>
    </Provider>
  );
}

export default App;
