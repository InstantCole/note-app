import React, { useState, useEffect } from 'react'
// import { useDispatch, useSelector } from 'react-redux'
// import { addNote, removeAllNotes } from '../reducers/notesSlice'

import { nanoid } from '@reduxjs/toolkit'
import { useRecoilState } from 'recoil'
import { notesState } from '../recoil/states'

const AddNote = (props) => {

    useEffect(() => {
        document.getElementsByClassName("add-note-title")[0].focus()
    }, [])

    const [titleText, setTitleText] = useState('')
    const [noteText, setNoteText] = useState('')
    const [notes, setNotes] = useRecoilState(notesState)
    const [noteTags, setNoteTags] = useState([])



    const handleTextChange = ({ target: { value } }) => {
        setNoteText(value)
        const patternA = /\s+/
        setNoteTags(value.split(patternA).filter(word => word.charAt(0) == "#" && word.length > 1))
        setNoteTags(prevTags => prevTags.map(tag => tag.substr(1, tag.length)))
        
    }

    const handleTitleChange = ({ target: { value } }) => {
        setTitleText(value)
    }

    const handleAddNote = (e) => {
        e.preventDefault()
        if(noteText === ""){
            alert("The note was not saved because it was empty.")
            return
        }
        if(titleText === ""){
            alert("The note needs a title.")
            return
        }
        const sortedTagsList = noteTags.map((tag) => tag).sort()
        setNotes((oldNotes) => [
            ...oldNotes,
            {
                noteId: nanoid(),
                noteTitle: titleText,
                noteText: noteText,
                noteTags: sortedTagsList
            }
        ])
        setNoteText('')
        setNoteTags([])
        console.log("notes:", notes)
    }

    return (
        <div className="add-note-wrapper">
            <div className="add-note-container">
                <h2>New Note</h2>
                <form className="add-note-form">
                    <input className="add-note-title" type="text" onChange={handleTitleChange} value={titleText}/>
                    <textarea className="add-note-text" onChange={handleTextChange} value={noteText}></textarea>
                    <button className="add-note-button note-button" onClick={handleAddNote}>Add</button>
                </form>
            </div>
            <div className="tags-container">
                <h2>Tags</h2>
                <div className="tags-list">
                {noteTags.map(tag => <h4><span style={{color: "var(--main-color)"}}>#</span>{tag}</h4>)}
                </div>
            </div>
        </div>

    )
}

export default AddNote