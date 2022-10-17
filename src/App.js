import './App.css';

import {Route, Routes} from "react-router-dom";
import React from "react";
import Home from "./components/Home";
import Header from "./components/Header";
import Projects from "./components/Projects";
import Footer from "./components/Footer";
import Bookmarks from "./components/Bookmarks";
import Contacts from "./components/Contacts";
import Creation from "./components/Creation";

function App() {

  return (
      <main>
          <Header />
          <div className="main-content" id="main-content">
              <Routes>
                  <Route path="/" element={ <Home /> }></Route>
                  <Route path="/projects" element={ <Projects /> }></Route>
                  <Route path="/creation" element={ <Creation /> }></Route>
                  <Route path="/bookmarks" element={ <Bookmarks /> }></Route>
                  <Route path="/contacts" element={ <Contacts /> }></Route>
              </Routes>
          </div>
          <Footer />
      </main>
  );
}

export default App;
