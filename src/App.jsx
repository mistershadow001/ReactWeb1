import Navbar from "./Navbar"
import Input from "./Input"
import Card from "./Card"
import React from "react";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom"


function App() {
 

  return (
    <>
    
    <Router>
      <Navbar/>
    </Router>


    <Input/>
    

    </>
  )
}

export default App
