import React from 'react'
import { Link } from 'react-router-dom'
import { useRecoilValue } from 'recoil'
import { notesState } from '../reducers/states'

const Notes = () => {
    const notes = useRecoilValue(notesState)
    console.log(notes.notesState)

    let noteList
    if(notes.length > 3)
    {
        noteList = notes.map((note, index) => (
            
                <Link className="note-list-card" to={`/note/${note.noteId}`}>Note {index + 1}</Link>
            
        )).slice(-3)
    }
    else{
        noteList = notes.map((note, index) => (
            
                <Link className="note-list-card" to={`/note/${note.noteId}`}>Note {index + 1}</Link>
            
        ))
    }

    
    return (
        <div className= "note-list">
            <h1>Smart Notes</h1>
            <h3>Recent Notes</h3>
            <div>
                {noteList}
            </div>
        </div>
    )
}

export default Notes