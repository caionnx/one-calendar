export default (state = [], action) => {
  switch (action.type) {
    case 'ADD_EVENT':
      return [
        ...state,
        {
          id: action.id,
          date: action.date,
          name: action.name,
        }
      ]
    case 'REMOVE_EVENT':
      return state.filter(event => event.date !== action.date)
    default:
      return state
  }
}