import React from "react";
import BlogPage from "pages/BlogPage";
import Writeonmedium from "pages/Writeonmedium";
import Writeondevto from "pages/Writeondevto";
import MediumProfile from "pages/MediumProfile";
import DevtoProfile from "pages/DevtoProfile";
import Tags from "pages/Tags";
import Dashboard from "pages/Dashboard";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "pages/Home";
import NotFound from "pages/NotFound";

const ProjectRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/tags" element={<Tags />} />
        <Route path="/devtoprofile" element={<DevtoProfile />} />
        <Route path="/mediumprofile" element={<MediumProfile />} />
        <Route path="/writeondevto" element={<Writeondevto />} />
        <Route path="/writeonmedium" element={<Writeonmedium />} />
        <Route path="/blogpage" element={<BlogPage />} />
      </Routes>
    </Router>
  );
};

export default ProjectRoutes;
