import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes, useNavigate, Navigate } from "react-router-dom";
import Chat from "./pages/Chat";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Settings from "./pages/Settings";
import ForgotPassword from "./pages/ForgotPassword";

export default function App() {
  const [user, setUser] = useState(null); // Initialize user state as null




  return (
    <div className="App">
      <Router>
        <Routes>
          <Route
            path="/chat"
            element={user ? <Chat /> : <Navigate to="/login" />} // Redirect to login if no user
          />
          <Route
            path="/settings"
            element={user ? <Settings /> : <Navigate to="/login" />} // Redirect to login if no user
          />
          <Route
            path="/login"
            element={<Login />} // Corrected prop name: setUser
          />
          <Route path="/register" element={<Register />} />
          <Route path="/forgotpassword" element={<ForgotPassword />} />
        </Routes>
      </Router>
    </div>
  );
}

