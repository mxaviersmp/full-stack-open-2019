import noteService from '../services/notes'

const noteReducer = (state = [], action) => {
  switch (action.type) {
    case 'NEW_NOTE':
      return [...state, action.data]
    case 'TOGGLE_IMPORTANCE':
      const updatedNote = action.data
      return state.map(note =>
        note.id !== updatedNote.id ? note : updatedNote
      )
    case 'INIT_NOTES':
      return action.data
    default:
      return state
  }
}

export const createNote = (content) => { 
  return async dispatch => {
    const newNote = await noteService.createNew(content)
    dispatch({
      type: 'NEW_NOTE',
      data: newNote
    })
  }
}

export const toggleImportanceOf = (note) => {
  return async dispatch => {
    const updatedNote = await noteService.update(note)
    dispatch({
      type: 'TOGGLE_IMPORTANCE',
      data: updatedNote
    })
  }
}

export const initializeNotes = () => {
  return async dispatch => {
    const notes = await noteService.getAll()
    dispatch({
      type: 'INIT_NOTES',
      data: notes
    })
  }
}

export default noteReducer
