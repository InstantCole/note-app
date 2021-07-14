import React from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'

const Home = () => {
    const notes = useSelector(state => state.notes)
    const noteList = notes.map((note) => (
        <Link to={`/note/${note.noteId}`}>Note</Link>
    ))
    return (
        <div>
            <p>homepage</p>
            {noteList}
        </div>
    )
}

export default Home