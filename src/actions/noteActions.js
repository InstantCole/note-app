export const addNote = ({ note }) => ({
    type: 'ADD_NOTE',
    note
})

export const deleteNote = ({ id }) => ({
    type: 'DELETE_NOTE',
    id
})
    

