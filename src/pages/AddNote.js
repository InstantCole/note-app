import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { nanoid } from '@reduxjs/toolkit'
import { addNote, removeAllNotes } from '../reducers/notesSlice'

const AddNote = (props) => {


    const [tagslist, setTagsList] = useState([])
    const [note, setNote] = useState('')
    const dispatch = useDispatch()
    const notes = useSelector(state => state.notes)


    const onNoteChange = e => {
        const pattern = /[^a-zA-Z-]+/
        const wordArray = e.target.value.split(pattern).filter(word => word.length > 2)
        setNote(e.target.value)
        console.log(wordArray)

    }

    const onSubmitNote = e => {
        e.preventDefault()
        dispatch(addNote({ noteId: nanoid(), noteContent: note, noteTags: tagslist}))
        setNote('')
        setTagsList([])
        console.log(notes)
    }

    const handleTagChoice = e => {
        setTagsList(prevTags => {
            if (prevTags.find(element => element === e.target.innerText) === undefined) {
                prevTags.push(e.target.innerText)
                return prevTags
            }
            return prevTags
        })
        console.log(tagslist)
    }




    const notesList = notes.map(note => (<div><p>{note.noteContent}</p><p>{note.noteId}</p></div>))











    return (
        <div>
            <p>add a note here</p>
            <form>
                <label htmlFor="note">Note</label>
                <textarea
                    type="text"
                    id="note"
                    name="note"
                    value={note}
                    onChange={onNoteChange}
                />
                <button onClick={(e) => onSubmitNote(e)}>Add Note</button>

            </form>
            <button onClick={(e) => handleTagChoice(e)}>funny</button>
            <button onClick={(e) => handleTagChoice(e)}>sad</button>
            <button onClick={(e) => handleTagChoice(e)}>scary</button>

            <button onClick={() => dispatch(removeAllNotes())}>Remove All</button>
            {notesList}
        </div>
    )
}

export default AddNote