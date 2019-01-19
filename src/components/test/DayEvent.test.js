import React from 'react';
import Modal from 'react-modal';
import { shallow } from 'enzyme';

import DayEvent from '../DayEvent';

let wrapper;

it('render with modal component', () => {
  wrapper = shallow(<DayEvent />);

  expect(wrapper.find(Modal)).toHaveLength(1);
  expect(wrapper).toMatchSnapshot();
});

it('execute "add event" prop function', () => {
  const onAddEvent = jest.fn();
  wrapper = shallow(<DayEvent onAddEvent={onAddEvent} />);
  wrapper.find('select').simulate('change', { target: { value: 'birthday'} })
  wrapper.find('form').simulate('submit');

  expect(onAddEvent).toHaveBeenCalledWith(undefined, {
    id: expect.any(String),
    name: expect.any(String)
  });
});

it('execute "remove event" prop function', () => {
  const onRemoveEvent = jest.fn();
  const event = { name: 'Test', id: 'test' };
  wrapper = shallow(
    <DayEvent event={event} onRemoveEvent={onRemoveEvent} />
  );
  wrapper.find('button').at(1).simulate('click');
  
  expect(wrapper).toMatchSnapshot();
  expect(onRemoveEvent).toHaveBeenCalledWith(event.id);
});