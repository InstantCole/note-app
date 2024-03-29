import React from 'react'
import { NavLink } from 'react-router-dom'

const AppNavigation = () => (
    <nav className="nav-bar">
        <ul>
            <NavLink to="/" activeClassName="active" exact={true}>
                <li className="nav-bar-item">
                    Notes
                </li>
            </NavLink>
            <NavLink to="/add-note" activeClassName="active">
                <li className="nav-bar-item">
                    Add Note
                </li>
            </NavLink>
            <NavLink to="/options" activeClassName="active">
                <li className="nav-bar-item">
                    Options
                </li>
            </NavLink>

        </ul>
    </nav>
)

export default AppNavigation
