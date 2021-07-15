import React from 'react'
import { Link } from 'react-router-dom'
import { useRecoilValue } from 'recoil'
import { notesState } from '../reducers/states'

const Home = () => {
    const notes = useRecoilValue(notesState)
    const noteList = notes.map((note) => (
        <li>
            <Link to={`/note/${note.noteId}`}>Note</Link>
        </li>
    ))
    console.log(notes)
    return (
        <div>
            <p>homepage</p>
            <ul>
                {noteList}
            </ul>
        </div>
    )
}

export default Home