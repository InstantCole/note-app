import React from 'react'
import Footer from './Footer.js'

function Layout(props) {
    return (
        <div>
            <div className="content">
                {props.children}
            </div>
            <Footer />
        </div>
    )
}

export default Layout