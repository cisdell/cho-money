import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useAuthContext } from "./hooks/useAuthContext";
//components
import Home from "./pages/home/Home.js";
import Login from "./pages/login/Login.js";
import Signup from "./pages/signup/Signup.js";
import Navbar from "./components/Navbar.js";

//styles
import "./index.css";

function App() {
  const { authIsReady, user } = useAuthContext();

  return (
    <div className="App">
      {authIsReady && (
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route
              path="/"
              element={user ? <Home /> : <Navigate to="/login" />}
            />
            <Route
              path="/signup"
              element={user ? <Navigate to="/home" /> : <Signup />}
            />
            <Route
              path="/login"
              element={user ? <Navigate to="/home" /> : <Login />}
            />

            <Route path="/redirect" element={<Navigate to="/home" />} />

            {/* 131 */}
          </Routes>
        </BrowserRouter>
      )}
    </div>
  );
}

export default App;
