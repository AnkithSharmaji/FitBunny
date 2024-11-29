// App main component in the website and has routing for website navigation
// Imports
import React from "react";
import Navbar from "./components/navbar/Navbar.jsx";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Home from "./screens/home/Home.jsx";
import Profile from "./screens/profile/Profile.jsx";
import CreateGroup from "./screens/creategroup/CreateGroup.jsx";
import { ToastContainer } from "react-toastify";
import EditProfile from "./screens/profile/EditProfile.jsx";
import CreateChallenge from "./screens/createchallenges/CreateChallenge.jsx";
import ShowMembers from "./screens/privategroups/privategropmembernew.jsx";
import "./App.css";
import PublicGroup from "./screens/publicgroups/PublicGroup.jsx";
const App = () => {
  return (
    <div>
      <Router>
        <Navbar />
        <ToastContainer />
        <div className="website-background">
          <Routes>
            <Route path="/" element={<Home />} />

            <Route path="/creategroup" element={<CreateGroup />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/editprofile" element={<EditProfile />} />
            <Route path="/createchallenge" element={<CreateChallenge />} />
            <Route path="/joinpublicgroup/:id" element={<PublicGroup />} />

            <Route path="/showmembers" element={<ShowMembers />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
};

export default App;
