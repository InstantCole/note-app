import React, { useState, useEffect } from 'react'
import TagsList from '../components/TagsList'
// import { useDispatch, useSelector } from 'react-redux'
// import { addNote, removeAllNotes } from '../reducers/notesSlice'

import { nanoid } from '@reduxjs/toolkit'
import { useRecoilState } from 'recoil'
import { notesState } from '../recoil/states'

const AddNote = (props) => {

    useEffect(() => {
        document.getElementsByClassName("add-note-title")[0].focus()
    }, [])

    const [noteTitle, setNoteTitle] = useState('')
    const [noteText, setNoteText] = useState('')
    const [notes, setNotes] = useRecoilState(notesState)
    const [noteTags, setNoteTags] = useState([])
    console.log("props: ", props)




    const handleNoteTextChange = ({ target: { value } }) => {
        setNoteText(value)
        const patternA = /\s+/
        setNoteTags(value.split(patternA).filter(word => word.charAt(0) == "#" && word.length > 1))
        setNoteTags(prevTags => prevTags.map(tag => tag.substr(1, tag.length)))

    }

    const handleTitleChange = ({ target: { value } }) => {
        setNoteTitle(value)
    }

    const handleAddNote = (e) => {
        e.preventDefault()
        if (noteText === "") {
            alert("The note was not saved because it was empty.")
            return
        }
        if (noteTitle === "") {
            alert("The note needs a title.")
            return
        }
        const sortedTagsList = noteTags.map((tag) => tag).sort()
        setNotes((oldNotes) => [
            ...oldNotes,
            {
                noteId: nanoid(),
                noteTitle: noteTitle,
                noteText: noteText,
                noteTags: sortedTagsList,
                noteCreatedDate: new Date(),
                noteEditCount: 0
            }
        ])
        setNoteTitle('')
        setNoteText('')
        setNoteTags([])
        console.log("notes:", notes)
    }

    return (

        <div className="add-note-container row">
            <div className="col-8">
                <h2>New Note</h2>
                <form id="noteform" className="add-note-form fit-screen-vertical">
                    <input className="add-note-title" type="text" onChange={handleTitleChange} placeholder="Note Title" value={noteTitle} />
                    <textarea className="add-note-text" onChange={handleNoteTextChange} placeholder="Note content goes here. # denotes a tag for your note." value={noteText}></textarea>
                </form>
            </div>
            <div className="col-4">
                <h2>Tags</h2>

                <div className="tags-container fit-screen-vertical">
                    <TagsList noteTags={noteTags} />
                </div>
            </div>
            <div className="row">
                <button className="button button--add" onClick={handleAddNote}>Add</button>

            </div>
        </div>


    )
}

export default AddNote