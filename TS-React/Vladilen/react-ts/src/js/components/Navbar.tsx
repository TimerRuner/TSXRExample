import React from "react"
import { NavLink } from "react-router-dom"

export const Navbar: React.FC = () => (
    <nav className="purple darken-2">
        <div className="container">
            <div className="nav-wrapper ">
                <NavLink to="/" className="brand-logo">
                    React + TS
                </NavLink>
                <ul id="nav-mobile" className="right hide-on-med-and-down">
                    <li>
                        <NavLink to="/">Todo List</NavLink>
                    </li>
                    <li>
                        <NavLink to="/about">Information</NavLink>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
)
