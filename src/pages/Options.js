import React, { useState, useEffect } from 'react'


const Options = (props) => {
    const [redValue, setRedValue] = useState(50)
    const [greenValue, setGreenValue] = useState(222)
    const [blueValue, setBlueValue] = useState(222)
    const [redColor, setRedColor] = useState(50)
    const [greenColor, setGreenColor] = useState(222)
    const [blueColor, setBlueColor] = useState(222)
    const [sliderValue, setSliderValue] = useState(true)


    const handleRedSliderChange = ({ target: { value } }) => {
        setRedValue(value)
        setRedColor(value)
        document.documentElement.style.setProperty("--main-color", 'rgb(' + redColor + ', ' + greenColor + ', ' + blueColor + ')')
    }

    const handleGreenSliderChange = ({ target: { value } }) => {
        setGreenValue(value)
        setGreenColor(value)
        document.documentElement.style.setProperty("--main-color", 'rgb(' + redColor + ', ' + greenColor + ', ' + blueColor + ')')
    }

    const handleBlueSliderChange = ({ target: { value } }) => {
        setBlueValue(value)
        setBlueColor(value)
        document.documentElement.style.setProperty("--main-color", 'rgb(' + redColor + ', ' + greenColor + ', ' + blueColor + ')')
    }

    const handleToggleNight = ({target: { checked }}) => {
        console.log(checked)
        if(checked === true){
            document.documentElement.style.setProperty("--bg-color", "#ffffff")
            setSliderValue(false)
        }
        if(checked === false){
            document.documentElement.style.setProperty("--bg-color", "#000000")
            setSliderValue(true)
        }
        console.log(sliderValue)

    }

    return (
        <div>
            <div>
                <label for="red-slider">Red</label>
                <input onChange={handleRedSliderChange} type="range" id="red-slider" min="0" max="255" value={redValue} />
                <label for="green-slider">Green</label>
                <input onChange={handleGreenSliderChange} type="range" id="green-slider" min="0" max="255" value={greenValue} />
                <label for="blue-slider">Blue</label>
                <input onChange={handleBlueSliderChange} type="range" id="blue-slider" min="0" max="255" value={blueValue} />
                <div className="color-sample"></div>
                
            </div>
            <label class="switch">
            <input type="checkbox" onChange={handleToggleNight} value={sliderValue}/>
            <span class="slider round"></span>
            </label>
        </div>
    )
}

export default Options