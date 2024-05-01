// src/App.js
import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NavBar from './components/NavBar';
import { Home } from "./views/Home";
import { HotMems } from "./views/HotMems";
import { RegularMems } from "./views/RegularMems";
import { MyBestMems } from "./views/MyBestMems";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/hot" element={<HotMems />} />
          <Route path="/regular" element={<RegularMems />} />
          <Route path="/mybest" element={<MyBestMems />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
