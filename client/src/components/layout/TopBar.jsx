import React from "react"

import { Link } from "react-router-dom"
import "../../style/topBar.pcss"

export const TopBar = () => (
  <div className="top-bar">
    <div className="top-bar-left">
      <ul className="menu">
        <li className="menu-text">Da Squids App</li>
        <li>
          <Link to="/" className="menu-link">
            Home
          </Link>
        </li>
        <li>
          <Link to="/squids" className="menu-link">
            All Squids
          </Link>
        </li>
      </ul>
    </div>
  </div>
)
