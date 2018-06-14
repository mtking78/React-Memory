import React from "react";
import "./Navbar.css";

const Navbar = props => (
    <nav className="navbar navbar-light bg-light d-flex">
        <div className="navbar-brand flex-fill">
            React Memory Clicker
        </div>
        <div className="nav-item p-2 flex-fill bd-highlight">
            <span className="message navbar-text">{props.message}</span>
        </div>
        <div className="nav-item p-2 flex-fill bd-highlight">
            <span className="current-score navbar-text">Score: {props.score}</span>
        </div>
        <div className="nav-item p-2 flex-fill bd-highlight">
            <span className="high-score navbar-text">Top Score: {props.topScore}</span>
        </div>
    </nav>
);

export default Navbar;