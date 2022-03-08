import React from "react"

import { Link } from "react-router-dom"
import "../../style/topBar.pcss"

export const TopBar = () => (
  <div className="top-bar">
    <div className="top-bar-left">
      <ul className="menu">
        <li>
          <Link to="/" className="menu-link">
            Da Squids App
          </Link>
        </li>
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
