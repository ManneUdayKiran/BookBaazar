// import React from "react";
import { BrowserRouter as Router, Routes, Route, useNavigate } from "react-router-dom";
import "./App.css";
// import { Routes, Route, useNavigate } from 'react-router-dom';

import Home from "./pages/Home";

import Navbar from "./components/Navbar";
import Books from "./pages/Books";
import Dashboard from "./pages/Catalog";
import { useState } from "react";
// import { useNavigate } from "react-router-dom";

const  App=()=> {
  
    return (
        <Router>
            <Navbar  />
            <Routes>
                {/* <Route path="/home" element={<Home searchQuery={searchQuery} />} /> */}
                <Route path="/" element={<Home />} />
                <Route path="/shop" element={<Books />} />
                <Route path="/dashboard" element={<Dashboard />} />
            </Routes>
        </Router>
    );
}

export default App;
