import React from 'react'
import Layout from './Layout.js'
import TwitchVod from './TwitchVod'
import { addClassById } from '../utils.js'


function App() {
    function handleClick (e){
        addClassById("paragraph", ["bold", "something"])
    }
    return (
        <Layout>
            <p id="paragraph">My App component</p>
            <button onClick={handleClick}>Click</button>

        </Layout>
    )
}

export default App