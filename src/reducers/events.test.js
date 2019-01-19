import reducer from './events';
import { addEvent, removeEvent } from '../actions/index';

let action;
let result;
const mockEvent = {
  id: 'birthday',
  name: 'Birthday',
  date: '25/12/2018'
}

it('return default state', () => {
  expect(reducer(undefined, { type: undefined })).toEqual([]);
})

it('add new event to state', () => {
  const { id, name, date } = mockEvent;
  action = addEvent(id, name, date);
  result = reducer([], action);
  expect(result.find(obj => obj.date === date)).toBeTruthy()
})

it('remove event from state', () => {
  const { date } = mockEvent;
  action = removeEvent(date);
  result = reducer([mockEvent], action);
  expect(result.find(obj => obj.date === date)).toBeFalsy()
})