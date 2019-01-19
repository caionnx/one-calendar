import ReactDOM from 'react-dom';
import { createStore } from 'redux';
jest.mock('react-dom');
jest.mock('redux');

it('react render and store creation', () => {
  require('./index');

  expect(ReactDOM.render).toHaveBeenCalled();
  expect(createStore).toHaveBeenCalled();
});