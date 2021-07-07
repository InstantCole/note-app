const defaultNotesState = [{note: "first note"}]

export default (state = defaultNotesState, action) => {
    switch (action.type) {
        case 'ADD_NOTE':
            return [
                ...state,
                action.note
            ]
        default:
            return state
    }

}

