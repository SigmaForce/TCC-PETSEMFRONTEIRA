import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import React from "react";
import { Login } from "./pages/Login";
import { Create } from "./pages/Login/Create";
import { Recover } from "./pages/Login/Recover";
import { Main } from "./pages/Main";

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/login" element={<Login />} />
        <Route path="/create" element={<Create />} />
        <Route path="/recover" element={<Recover />} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;
