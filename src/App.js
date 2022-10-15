import './App.css';

import {Route, Routes} from "react-router-dom";
import React from "react";
import Home from "./components/Home";
import Header from "./components/Header";
import Projects from "./components/Projects";
import Footer from "./components/Footer";
import { Helmet } from 'react-helmet'
import {useState, useEffect} from "react";
import Title from "./components/Title";

function App() {

  return (
      <main>
          <Title />
          <Header />
          <div className="main-content">
              <Routes>
                  <Route path="/" element={ <Home /> }></Route>
                  <Route path="/projects" element={ <Projects /> }></Route>
              </Routes>
          </div>
          <Footer />
      </main>
  );
}

export default App;
