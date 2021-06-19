import React from 'react'

function Layout(props) {
    return (
        <div>
            <nav className="w3-bar">
                <ul>
                    <li className="w3-bar-item">
                        <a href="/">Home</a>
                    </li>
                    <li className="w3-bar-item">
                        <a href="/">Home</a>
                    </li>

                </ul>
            </nav>
            <div className="w3-container">
                Something up top
            {props.children}
            Something down below
            </div>
        </div>
    )
}

export default Layout