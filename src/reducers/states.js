import { atom } from "recoil"

export const notesState = atom({
    key: 'notesState',
    default: [{
        noteId: "123",
        noteContent: "My first note!",
        noteTags: ["fun"]
    }]
})










