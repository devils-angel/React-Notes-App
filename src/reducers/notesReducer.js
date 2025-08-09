import {v4 as uuidv4} from 'uuid';
export const notesReducer = (state, action) => {
    const {type, payload} = action;
    switch (type) {
        case 'SET_TITLE':
            return {
                ...state,
                title: payload
            }
        case 'SET_TEXT':
            return { 
                ...state,
                text:payload
            }
        case 'ADD_NOTE':
            return {
                ...state,
                notes: [...state.notes, {id: uuidv4(), title: state.title, text: state.text, isPinned: false, isArchived: false, isDeleted: false}],
            }
        case 'CLEAR_TEXT':
            return {
                ...state,
                title: "",
                text: ""
            }
        case 'TOGGLE_PINNED':
            return {
                ...state,
                notes: state.notes.map(note =>
                    note.id === payload ? { ...note, isPinned: !note.isPinned } : note
                )
            }
        case 'ARCHIVE':
            return {
                ...state,
                notes: state.notes.map(note =>
                    note.id === payload ? { ...note, isArchived: true } : note
                )
            }
        case 'DELETE_NOTE':
            return {
                ...state,
                notes: state.notes.map(note =>
                    note.id === payload ? { ...note, isDeleted: true } : note
                )
            }
        case "PERMANENT_DELETE":
            return {
                ...state,
                notes: state.notes.filter(note => note.id !== action.payload.id),
            };
        default:
            return state

    }
}



