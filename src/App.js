import React from "react";
import "./index.css";
import Home  from "./routes/Home"
import { Route, Routes } from "react-router-dom";
import About from "./routes/About";
import Project from "./routes/Project";
import Contact from "./routes/Contact";
const App = () =>{
  return (
    <>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/Project" element={<Project/>}/>
        <Route path="/About" element={<About/>}/>
        <Route path="/Contact" element={<Contact/>}/>
      </Routes>
    </>
  );
}

export default App;
