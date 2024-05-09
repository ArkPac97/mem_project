// src/App.js
import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import NavBar from './components/NavBar';
import { Home } from "./views/Home";
import { HotMems } from "./views/HotMems";
import { RegularMems } from "./views/RegularMems";
import { MyBestMems } from "./views/MyBestMems";
import { CSSTransition, TransitionGroup } from 'react-transition-group';

function AnimatedRoutes() {
  const location = useLocation(); // Hook

  return (
    <TransitionGroup component={null}>
      <CSSTransition key={location.key} timeout={300} classNames="fade">
        <Routes location={location}>
          <Route path="/" element={<Home />} />
          <Route path="/hot" element={<HotMems />} />
          <Route path="/regular" element={<RegularMems />} />
          <Route path="/mybest" element={<MyBestMems />} />
        </Routes>
      </CSSTransition>
    </TransitionGroup>
  );
}

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <NavBar />
        <AnimatedRoutes />
      </div>
    </BrowserRouter>
  );
}

export default App;
