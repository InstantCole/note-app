import React, { useState, useRef, useEffect } from 'react'
import { notesState } from '../reducers/states'
import { useRecoilState, useSetRecoilState } from 'recoil'



const Note = (props) => {
    const [notes, setNotes] = useRecoilState(notesState)
    const [editable, setEditable] = useState(false)
    const { noteId } = props.match.params
    const noteIndex = notes.findIndex(note => note.noteId === props.match.params.noteId)
    const [noteText, setNoteText] = useState(notes[noteIndex].noteText)
    const [noteTags, setNoteTags] = useState(notes[noteIndex].noteTags)
    console.log("noteindex", noteIndex)
    const textRef = useRef(null)


    useEffect(() => {
        const focusedElement = textRef.current
        if (focusedElement.nodeName === "TEXTAREA" && document.activeElement != focusedElement) {
            focusedElement.focus()
            focusedElement.select()
        }
        console.log("localstorage:", localStorage)
    })

    const handleEditNote = (e) => {
        e.preventDefault()
        setEditable(true)
        const focusedElement = textRef.current
        console.log(focusedElement)
        focusedElement.focus()
        if (focusedElement.nodeName === "TEXTAREA") {
            focusedElement.select()
        }
    }

    const handleSaveNote = (e) => {
        e.preventDefault()
        const firstHalfNotes = notes.slice(0, noteIndex)
        const lastHalfNotes = notes.slice(noteIndex + 1, notes.length)
        console.log("lastHalfNotes:", lastHalfNotes)
        setNotes(() => [
            ...firstHalfNotes,
            {
                noteId: noteId,
                noteText: noteText,
                noteTags: noteTags
            },
            ...lastHalfNotes
        ])
        setEditable(false)
        console.log("notes:",notes)

    }

    const handleCancelEdit = (e) => {
        e.preventDefault()
        setEditable(false)
        setNoteText(notes[noteIndex].noteText)
        setNoteTags(notes[noteIndex].noteTags)


    }

    const handleNoteTextChange = ({ target: { value } }) => {
        setNoteText(value)
        const patternA = /\s+/
        setNoteTags(value.split(patternA).filter(word => word.charAt(0) == "#" && word.length > 1))
        setNoteTags(prevTags => prevTags.map(tag => tag.substr(1, tag.length)))


    }

    const tagsList = noteTags.map(tag => <h4><span style={{ color: "var(--main-color)" }}>#</span>{tag}</h4>)

    return (
        <div className="add-note-wrapper">
            <div className="add-note-container">
                <h2>Note {noteIndex + 1}</h2>
                <form className="add-note-form">
                    {!editable && <p ref={textRef} className="add-note-text note-pre-wrap">{noteText}</p>}
                    {editable && <textarea ref={textRef} className="add-note-text" value={noteText} onChange={handleNoteTextChange}></textarea>}
                    {!editable && <button className="edit-note-button note-button" onClick={handleEditNote} >Edit</button>}
                    {editable && <button className="cancel-note-button note-button" onClick={handleCancelEdit} >Cancel</button>}
                    {editable && <button className="save-note-button note-button" onClick={handleSaveNote} >Save</button>}
                </form>
            </div>
            <div className="tags-container">
                <h2>Tags</h2>
                <div className="tags-list">
                    {tagsList}
                </div>
            </div>
        </div>



        // <div className="note-content">
        //     <h1>Note</h1>
        //     <p className="note-pre-wrap">{thisNote.noteContent}</p>
        //     <h3>Tags</h3>
        //     {thisNote.noteTags && (thisNote.noteTags.map(noteTag => <p>{noteTag}</p>))}
        // </div>
    )
}

export default Note