import React from "react";
import { Route, Routes } from "react-router-dom";
import MainLayouts from "../layouts/MainLayouts";
import HomePage from "../pages/ToDoPage/HomePage/HomePage";
import ToDoPage from "../pages/ToDoPage/ToDoPage";

function MainRoutes() {
  return (
    <div>
      <Routes>
        <Route element={<MainLayouts />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/todo" element={<ToDoPage />} />
        </Route>
      </Routes>
    </div>
  );
}

export default MainRoutes;
