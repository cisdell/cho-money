import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
//components
import Home from "./pages/home/Home.js";
import Login from "./pages/login/Login.js"
import Signup from "./pages/signup/Signup.js"
//styles
import "./index.css";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
