const anecdotesAtStart = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

const getId = () => (100000 * Math.random()).toFixed(0)

const asObject = (anecdote) => {
  return {
    content: anecdote,
    id: getId(),
    votes: 0
  }
}

const initialState = anecdotesAtStart.map(asObject).sort((a, b) => b.votes - a.votes)

const reducer = (state = initialState, action) => {
  console.log(action)
  switch(action.type) {
    case 'UPVOTE':
      const anecdote = state.find(st => st.id === action.data)
      if (anecdote) {
        anecdote.votes += 1
        return state.map(st => (st.id === anecdote.id ? anecdote : st)).sort((a, b) => b.votes - a.votes)
      }
      break
    case 'NEW_ANECDOTE':
      return [...state, asObject(action.data)]
    default:
      return state
  }
}

export const createAnecdote = (content) => {
  return {
    type: 'NEW_ANECDOTE',
    data: content
  }
}

export const upvoteAnecdote = (id) => {
  return {
    type: 'UPVOTE',
    data: id
  }
}

export default reducer