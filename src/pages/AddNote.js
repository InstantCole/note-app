import React, { useState, useEffect } from 'react'
// import { useDispatch, useSelector } from 'react-redux'
// import { addNote, removeAllNotes } from '../reducers/notesSlice'

import { nanoid } from '@reduxjs/toolkit'
import { useRecoilState } from 'recoil'
import { notesState } from '../reducers/states'

const AddNote = (props) => {

    useEffect(() => {
        document.getElementsByClassName("add-note-text")[0].focus()
    })

    const [noteText, setNoteText] = useState('')
    const [notes, setNotes] = useRecoilState(notesState)
    const [tagsList, setTagsList] = useState([])



    const handleChange = ({ target: { value } }) => {

        const patternA = /[^a-z#A-Z0-9-]+/
        setTagsList(noteText.split(patternA).filter(word => word.charAt(0) == "#"))
        const patternB = /[^a-zA-Z0-9-]+/
        setTagsList(prevTags => prevTags.map(tag => tag.substr(1, tag.length)))
        setNoteText(value)
    }

    const handleAddNote = (e) => {
        e.preventDefault()

        setNotes((oldNotes) => [
            ...oldNotes,
            {
                noteId: nanoid(),
                noteContent: noteText,
                noteTags: tagsList
            }
        ])
        setNoteText('')
        setTagsList([])
        console.log(notes)
    }

    return (
        <div className="add-note-wrapper">
            <div className="add-note-container">
                <h2>New Note</h2>
                <form className="add-note-form">
                    <textarea className="add-note-text" onChange={handleChange} value={noteText}></textarea>
                    <button className="add-note-button" onClick={handleAddNote}>Add</button>
                </form>
            </div>
            <div className="tags-container">
                <h2>Tags</h2>
                <div className="tags-list">
                {tagsList.map(tag => <p>{tag}</p>)}
                </div>
            </div>
        </div>

    )
}

export default AddNote