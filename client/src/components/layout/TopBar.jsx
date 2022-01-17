import React from "react";

import { Link } from "react-router-dom";

export const TopBar = () => (
  <div className="top-bar">
    <div className="top-bar-left">
      <ul className="menu">
        <li className="menu-text">App</li>
        <li>
          <Link to="/">Home</Link>
        </li>
      </ul>
    </div>
  </div>
);
