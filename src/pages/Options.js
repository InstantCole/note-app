import React, { useState, useEffect } from 'react'
import { getCookie } from '../utils'



const Options = (props) => {

    //Read theme valuees from cookies
    const bgValueCookie = getCookie('bgValueCookie')
    const redValueCookie = getCookie('redValueCookie')
    const greenValueCookie = getCookie('greenValueCookie')
    const blueValueCookie = getCookie('blueValueCookie')

    //Use the theme values as state in the options or default if no state exists
    const [bgValue, setBGValue] = useState(bgValueCookie ? bgValueCookie: 0)
    const [redValue, setRedValue] = useState(redValueCookie ? redValueCookie: 50)
    const [greenValue, setGreenValue] = useState(greenValueCookie ? greenValueCookie: 222)
    const [blueValue, setBlueValue] = useState(blueValueCookie ? blueValueCookie: 222)

    // useEffect(() => {
    //     console.log(document.cookie)
    //     setBGValue(bgValueCookie)
    //     document.documentElement.style.setProperty("--bg-color", 'rgb(' + bgValueCookie + ', ' + bgValueCookie + ', ' + bgValueCookie + ')')
    //     let textColor = 255
    //     if (bgValueCookie < 175) {
    //         textColor = 255
    //     }
    //     else {
    //         textColor = 13
    //     }
    //     document.documentElement.style.setProperty("--text-color", 'rgb(' + textColor + ', ' + textColor + ', ' + textColor + ')')



    // }, [])


    




    const handleRedSliderChange = ({ target: { value } }) => {
        setRedValue(value)
        document.documentElement.style.setProperty("--main-color", 'rgb(' + redValue + ', ' + greenValue + ', ' + blueValue + ')')
        document.cookie = "redValueCookie=" + value

    }

    const handleGreenSliderChange = ({ target: { value } }) => {
        setGreenValue(value)
        document.documentElement.style.setProperty("--main-color", 'rgb(' + redValue + ', ' + greenValue + ', ' + blueValue + ')')
        document.cookie = "greenValueCookie=" + value

    }

    const handleBlueSliderChange = ({ target: { value } }) => {
        setBlueValue(value)
        document.documentElement.style.setProperty("--main-color", 'rgb(' + redValue + ', ' + greenValue + ', ' + blueValue + ')')
        document.cookie = "blueValueCookie=" + value

    }

    const handleBGSliderChange = ({ target: { value } }) => {
        setBGValue(value)
        let textColor = 255
        if (value < 175) {
            textColor = 255

        }
        else {
            textColor = 13

        }

        document.cookie = "bgValueCookie=" + value
        document.documentElement.style.setProperty("--text-color", 'rgb(' + textColor + ', ' + textColor + ', ' + textColor + ')')
        document.documentElement.style.setProperty("--bg-color", 'rgb(' + bgValue + ', ' + bgValue + ', ' + bgValue + ')')

    }




    return (

        <div className="color-chooser-container">
            <h3>Change Color</h3>
            <div className="add-note-container">
                <h2>New Note</h2>
                <form className="add-note-form">
                    <textarea className="add-note-text" defaultValue="Example Text"></textarea>
                    <button className="add-note-button note-button" onClick={(e) => e.preventDefault()}>Add</button>
                </form>
            </div>
            <label htmlFor="red-slider">Red</label>
            <input className="slider" onChange={handleRedSliderChange} type="range" id="red-slider" min="0" max="255" value={redValue} />
            <label htmlFor="green-slider">Green</label>
            <input className="slider" onChange={handleGreenSliderChange} type="range" id="green-slider" min="0" max="255" value={greenValue} />
            <label htmlFor="blue-slider">Blue</label>
            <input className="slider" onChange={handleBlueSliderChange} type="range" id="blue-slider" min="0" max="255" value={blueValue} />
            <label htmlFor="bg-slider">Background</label>
            <input className="slider" onChange={handleBGSliderChange} type="range" id="bg-slider" min="0" max="255" value={bgValue} />
        </div>

    )
}

export default Options