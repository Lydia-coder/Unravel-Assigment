import React from "react";
import "./App.css";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Login from "./Pages/Login";
import Home from "./Pages/Home";
import Layout from "./Components/Layout";
import { useSelector } from "react-redux";
import { IRootState } from "./Store/Interfaces/StateInterface";

function App() {
  const success = useSelector((state: IRootState) => state.login.success);
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route
            path="/login"
            element={success ? <Navigate to="/" replace /> : <Login />}
          />
          <Route path="/" element={<Home />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
