import React from 'react'
import rlcar from '../images/rlcar.jpg'

function ImageButton (props) {
    return (
        <div className="img-container">
            <a href="#">
            <img className="car-img" src={rlcar}></img>
            <div className="img-text">{props.title}</div>
            </a>
            </div>
    )
}

export default ImageButton