import React from 'react'
import { NavLink } from 'react-router-dom'

const AppNavigation = () => (
    <nav className="nav-bar">
    <ul>
        <NavLink to="/" activeClassName="active" exact={true}>
            <li className="nav-bar-item">
                Home
                    </li>
        </NavLink>
        <NavLink to="/add-note" activeClassName="active">
            <li className="nav-bar-item">
                Add Note
                    </li>
        </NavLink>
        <NavLink to="/note/123" activeClassName="active">
            <li className="nav-bar-item">
                Note
                    </li>
        </NavLink>

    </ul>
</nav>
)

export default AppNavigation
