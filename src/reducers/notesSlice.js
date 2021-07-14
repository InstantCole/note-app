import { createSlice } from "@reduxjs/toolkit"

export const notesSlice = createSlice({
    name: 'notes',
    initialState: [{
        noteId: "123",
        noteContent: "My first note!",
        noteTags: ["fun"]
    }],
    reducers: {
        addNote: (state, action) => void(state.push(action.payload)),
        removeAllNotes: state => state = [],
        
    }
})

export const { addNote, removeAllNotes } = notesSlice.actions

export default notesSlice.reducer






