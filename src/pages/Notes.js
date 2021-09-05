import React from 'react'
import { Link } from 'react-router-dom'
import { useRecoilValue } from 'recoil'
import { notesState } from '../recoil/states'

const Notes = () => {
    const notes = useRecoilValue(notesState)
    let noteListPreview

    if (notes.length > 3) {
        noteListPreview = notes.map((note, index) => (

            <Link className="note-list-card" to={`/note/${note.noteId}`}>Note {index + 1} - {note.noteTitle}</Link>

        )).slice(-3)
    }
    else {
        noteListPreview = notes.map((note, index) => (
            <Link className="note-list-card" to={`/note/${note.noteId}`}>Note {index + 1}</Link>
        ))
    }


    return (
        <div className="note-list">
            <h1>Smart Notes</h1>
            <h3>Recent Notes</h3>
            <div>
                {noteListPreview}
            </div>
        </div>
    )
}

export default Notes