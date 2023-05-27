import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes, useNavigate, Navigate } from "react-router-dom";
import Chat from "./pages/Chat";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Settings from "./pages/Settings";
import ForgotPassword from "./pages/ForgotPassword";
import DeleteAccount from "./pages/DeleteAccount";

export default function App() {
  const user = localStorage.getItem("token");

  return (
    <div className="App">
      <Router>
        <Routes>
          {user ? (
            <>
              <Route path="/" exact element={<Chat />} />
              <Route path="/settings" exact element={<Settings />} />
              <Route path="/deleteaccount" exact element={<DeleteAccount />} />
            </>
          ) : (
            <Route path="/" element={<Navigate replace to="/login" />} />
          )}
          <Route path="/register" exact element={<Register />} />
          <Route path="/login" exact element={<Login />} />
          <Route path="/forgotpassword" exact element={<ForgotPassword />} />
        </Routes>
      </Router>
    </div>
  );
}


