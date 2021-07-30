import React from 'react'
import { getCookie } from '../utils'

function Layout(props) {
    const redValueCookie = getCookie('redValueCookie')
    const greenValueCookie = getCookie('greenValueCookie')
    const blueValueCookie = getCookie('blueValueCookie')
    const bgValueCookie = getCookie('bgValueCookie')

    if(redValueCookie && blueValueCookie && greenValueCookie){
        document.documentElement.style.setProperty("--main-color", 'rgb(' + redValueCookie + ', ' + greenValueCookie + ', ' + blueValueCookie + ')')
    }

    if(bgValueCookie)
    {
        let textColor = 255
        if (bgValueCookie < 175) {
            textColor = 255

        }
        else {
            textColor = 13

        }

        document.documentElement.style.setProperty("--text-color", 'rgb(' + textColor + ', ' + textColor + ', ' + textColor + ')')
        document.documentElement.style.setProperty("--bg-color", 'rgb(' + bgValueCookie + ', ' + bgValueCookie + ', ' + bgValueCookie + ')')   
    }

    return (
        <div>
            <div className="content">
                {props.children}
            </div>
        </div>
    )
}

export default Layout