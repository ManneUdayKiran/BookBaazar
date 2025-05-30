import React, { useState } from 'react';
import { Link } from "react-router-dom";
import Logo from "../assets/logo.jpeg";


const Navbar = ({ onSearch }) => {
    
    return (
        <header className="navbar">
            <div className="logo-container">
                <img src={Logo} alt="logo" />
                <h2 ><a style={{textDecoration:'none',color:'white'}} href="/">Book Bazaar</a> </h2>
                <div className="searchbar">
              
                    
                    {/* <input type="text" placeholder="search"  */}
        
                </div>
            </div>
            <nav>
                <ul className="nav">
                    <li>
                        <Link to="/" className="nav-link ">
                            Home
                        </Link>
                    </li>
                 
                    <li>
                        <Link to="/shop" className="nav-link">
                            Books
                        </Link>
                    </li>
                    <li>
                        <Link to="/dashboard" className="nav-link">
                            Catalog
                        </Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default Navbar;
