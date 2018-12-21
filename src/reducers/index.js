export default (state = [], action) => {
  switch (action.type) {
    case 'ADD_EVENT':
      const { id, date, name } = action;
      
      return [
        ...state,
        {
          id: id,
          date: date,
          name: name,
        }
      ]
    case 'REMOVE_EVENT':
      return state.filter(event => event.date !== action.date)
    default:
      return state
  }
}