import React from "react";
import "./Navbar.css";

const Nav = props => (
    <nav class="navbar fixed-top navbar-light bg-light">
        <ul>
            <li id = "title">Memory Test</li>        
            <li id = "rightorwrong">{props.rightWrong}</li>
            <li id = "current-score">Current Score: {props.score}</li>
            <li id = "best-score">Top Score: {props.topScore}</li>
        </ul>
    </nav>

);

export default Navbar;