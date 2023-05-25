import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Chat from "./pages/Chat";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Settings from "./pages/Settings";


export default function App() {
  const [user, setUser] = useState({});

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={user._id ? <Chat /> : <Login />} />
          <Route path="/login" element={<Login setUserr={setUser} />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </Router>
    </div>
  );
}
