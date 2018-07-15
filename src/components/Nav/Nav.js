import React from "react";
import "./Nav.css";

const Nav = props => (
    <nav> class="navbar fixed-top navbar-light bg-light">
        <ul>
        <li className="brand animated lightSpeedIn">
        <a href="/clicky-game/">{props.title}</a>
      </li>

      <li id="rw">{props.rightWrong}</li>

      <li id="cur-sco">Current Score: {props.score}</li>

      <li id="top-sco">Top Score: {props.topScore}</li>
    </ul>
  </nav>
);

export default Nav;