import React, { useState } from 'react'
// import { useDispatch, useSelector } from 'react-redux'
// import { addNote, removeAllNotes } from '../reducers/notesSlice'

import { nanoid } from '@reduxjs/toolkit'
import { useRecoilState } from 'recoil'
import { notesState } from '../reducers/states'

const AddNote = (props) => {

    const [noteText, setNoteText] = useState('')
    const [notes, setNotes] = useRecoilState(notesState)


    const handleChange = ({target: {value}}) => {
        setNoteText(value)
    }

    const handleAddNote = (e) => {
        e.preventDefault()
        const pattern = /[^a-zA-Z-]+/
        const tagsArray = e.target.value.split(pattern)
        console.log("the tags Array",tagsArray)
        setNotes((oldNotes) => [
            ...oldNotes,
            {
                noteId: nanoid(),
                noteContent: noteText,
                noteTags: tagsArray
            }
        ])
        setNoteText('')
        console.log(notes)
    }

    return (
        <div>
            <p>add a note here</p>
            {console.log("nothing")}
            <form className="add-note-form">
                <textarea className="add-note-text" onChange={handleChange} value={noteText}></textarea>
                <button className="add-note-button" onClick={handleAddNote}>Add</button>
            </form>
        </div>
        
    )
}

export default AddNote