import React from "react";
import { BrowserRouter, Routes, Route, Redirect } from "react-router-dom";
import {useAuthContext} from './hooks/useAuthContext'
//components
import Home from "./pages/home/Home.js";
import Login from "./pages/login/Login.js"
import Signup from "./pages/signup/Signup.js"
import Navbar from "./components/Navbar.js"


//styles
import "./index.css";

function App() {
  const {authIsReady, user} = useAuthContext()

  return (
    <div className="App">
      {authIsReady && (
      <BrowserRouter>
      <Navbar/>
        <Routes>

          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />

          {/* 131 */}
        </Routes>
      </BrowserRouter>
      )}
    </div>
  );
}

export default App;
