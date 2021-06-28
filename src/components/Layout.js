import React from 'react'
import Footer from './Footer.js'

function Layout(props) {
    return (
        <div>
            <nav className="nav-bar">
                <ul>
                    <li className="nav-bar-item active">
                        <a href="/">Home</a>
                    </li>
                    <li className="nav-bar-item">
                        <a href="/">Home</a>
                    </li>

                </ul>
            </nav>
            <div className="content">
                Something up top
            {props.children}
            Something down below
            </div>
            <Footer/>
        </div>
    )
}

export default Layout