import React from 'react'
import Layout from './Layout.js'
import TwitchVod from './TwitchVod'
import { addClassById } from '../utils.js'
import ImageButton from './ImageButton.js'


function App() {
    function handleClick(e) {
        addClassById("paragraph", ["bold", "something"])
    }

    function handleNextScroll() {
        const element = document.getElementsByClassName("tournament-nav")[0]
        const scrollMax = element.clientWidth
        const scrollDistance = Math.min((scrollMax/252 * 252) - (scrollMax % 252), 756)
        console.log(scrollDistance)
        let scrollPos = element.scrollLeft

        element.scrollTo({
            left: scrollPos += scrollDistance,
            behavior: 'smooth'
        })
    }

    function handlePrevScroll() {
        const element = document.getElementsByClassName("tournament-nav")[0]
        const scrollMax = element.clientWidth
        const scrollDistance = Math.min((scrollMax/252 * 252) - (scrollMax % 252), 756)
        let scrollPos = element.scrollLeft
        element.scrollTo({
            left: scrollPos -= scrollDistance,
            behavior: 'smooth'
        })
    }

    return (
        <Layout>
            <h1 className="tournaments-title">
                Tournaments
            </h1>
            <div className="scroll-wrapper">
                <div className="tournament-nav">
                    <ImageButton title="RLCS 1" />
                    <ImageButton title="RLCS 2" />
                    <ImageButton title="RLCS 2" />
                    <ImageButton title="RLCS 2" />
                    <ImageButton title="RLCS 2" />
                    <ImageButton title="RLCS 2" />
                    <ImageButton title="RLCS 2" />
                    <ImageButton title="RLCS 2" />
                    <ImageButton title="RLCS 2" />
                </div>
                <a className="prev" onClick={handlePrevScroll}>&#10094;</a>
                <a className="next" onClick={handleNextScroll}>&#10095;</a>
            </div>
        </Layout>
    )
}

export default App