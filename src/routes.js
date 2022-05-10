import React from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from './pages/HomePage';
import CheckerPage from './pages/CheckerPage';


const MyRoutes = () => (
  <Routes>
    <Route index path="/" element={<HomePage />} />
    <Route path="/checker" element={<CheckerPage />} />
  </Routes>
);

export default MyRoutes;
