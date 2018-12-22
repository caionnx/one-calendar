import React from 'react';
import ReactDOM from 'react-dom';
import configureMockStore from 'redux-mock-store';
import { Provider } from 'react-redux';
import App from '../App';

const mockStore = configureMockStore();

it('renders without crashing', () => {
  const div = document.createElement('div');
  const store = mockStore({ events: [] });

  ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>
    , div);
  ReactDOM.unmountComponentAtNode(div);
});
