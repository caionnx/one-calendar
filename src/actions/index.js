export const addEvent = (id, name, date) => ({
  type: 'ADD_EVENT',
  id,
  name,
  date
});

export const removeEvent = (date) => ({
  type: 'REMOVE_EVENT',
  date
})