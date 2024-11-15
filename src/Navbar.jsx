import { Link, BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React  from "react";
import Card from "./Card";

function Navbar(){
    return(
        <>
            <nav>
                <Link to="/">Home</Link>
                <Link to="#">About</Link>
                <Link to="/card">Card</Link>
            </nav>
            <Routes>
                <Route path="/card" element={<Card />} />
            </Routes>
        </>
        
    )
}
export  default Navbar;