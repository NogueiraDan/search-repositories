import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Repositories from "./pages/Repositories";
import Home from "./pages/Home";

const AllRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/repositories" element={<Repositories />} />
      </Routes>
    </Router>
  );
};

export default AllRoutes;
