import { addEvent, removeEvent } from './index';

const config = {
  id: 'test',
  name: 'One test',
  date: '24/12/2018'
}

it('return "add event" action object', () => {
  const { id, name, date } = config;
  expect(addEvent(id, name, date)).toEqual({
    ...config,
    type: 'ADD_EVENT'
  })
})

it('return "remove event" action object', () => {
  const { date } = config;
  expect(removeEvent(date)).toEqual({
    date,
    type: 'REMOVE_EVENT'
  })
})