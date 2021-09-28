import React from 'react'
import { NavLink } from 'react-router-dom';

import './Navbar.css';
export const Navbar = () => {
    return (
        <div className="nav">
            <div className="logo">WEB<span className="spanColor">APP</span></div>
            <ul className="main">
                <li><NavLink to="/dashboard">Dashboard </NavLink></li>
                <li><NavLink to="/linkpage">LinkPage </NavLink></li>
                <li><NavLink to="/postpage">PostPages </NavLink></li>
            </ul>
        </div>
    )
}
export default Navbar