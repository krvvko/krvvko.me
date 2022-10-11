import logo from './logo.svg';
import './App.css';
import Header from "./pages/Header";
import {Route, Routes} from "react-router-dom";
import Home from "./pages/Home";
import Blbl from "./pages/Blbl";
import React from "react";

function App() {
  return (
      <>
          <Header />
          <Routes>
              <Route path="/" element={ <Home /> }></Route>
              <Route path="/blbl" element={ <Blbl /> }></Route>
          </Routes>
      </>
  );
}

export default App;
