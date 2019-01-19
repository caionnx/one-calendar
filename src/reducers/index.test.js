import * as redux from 'redux';
jest.mock('redux')

it('run redux combineReducers', () => {
  const reducers = require('./index'); // eslint-disable-line

  expect(redux.combineReducers).toHaveBeenCalled();
})