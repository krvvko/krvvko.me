import './App.css';

import {Route, Routes} from "react-router-dom";
import React from "react";
import Home from "./components/Home";
import Header from "./components/Header";
import Projects from "./components/Projects";

function App() {
  return (
      <main>
          <Header />
          <div className="main-content">
              <Routes>
                  <Route path="/" element={ <Home /> }></Route>
                  <Route path="/projects" element={ <Projects /> }></Route>
              </Routes>
          </div>

      </main>
  );
}

export default App;
