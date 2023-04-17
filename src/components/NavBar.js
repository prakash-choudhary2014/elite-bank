import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";
import { bank } from "../assets";

function NavBar() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  return (
    <>
      <nav className="navbar">
        <div className="nav-container">
       
          <Link exact to="/" className="nav-logo">
          <img src={bank} className="bank-logo" />
            <p className="elite-bank">ELITE BANK</p>
            
          </Link>

          <ul className={click ? "nav-menu active" : "nav-menu"}>
           <li className="nav-item"> 
              <a href="#home" className="anchor">Home</a>
            </li>

            <li className="nav-item">
              <a href="#feature" className="anchor">
                Features
                </a>  
            </li>

            <li className="nav-item"> 
                <a href="#about" className="anchor"> About</a>
            </li>

            <li className="nav-item">  
              <a href="#client" className="anchor">Clients</a>
            </li>

            <li className="nav-item"> 
              <a href="#footer" className="anchor">Contact</a>
            </li>
          </ul>

          <div className="nav-icon" onClick={handleClick}>
            <i className={click ? "fas fa-times" : "fas fa-bars"}></i>
          </div>
        </div>
      </nav>
    </>
  );
}

export default NavBar;
