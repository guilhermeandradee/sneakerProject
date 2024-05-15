import React from "react";
import './header.css'


const Header = () => {
    return(
        <div className="header-container" >
            <nav className="search-bar-container">
                <input type="text" className="search-bar" />           
            </nav>
            <div className="logo-container">
                <div className="logo">
                    Logo
                </div>
            </div>
            <nav className="options-container">
                <div className="options">
                    Conta
                </div>
            </nav>
        </div>
    )
}

export default Header