import React from 'react';
import { shallow } from 'enzyme';

import DayEvent from '../DayEvent';
import { Day } from '../Day';

let wrapper;
let propDispatch;
const props = {
  numeric: 15,
  month: 11,
  year: 2018
}

it('render DayEvent on click', () => {
  wrapper = shallow(<Day {...props} />);
  wrapper.find('div').at(0).simulate('click');

  expect(wrapper.find(DayEvent)).toHaveLength(1);
});

it('render day correctly (with DayEvent)', () => {
  wrapper = shallow(<Day {...props} />);
  wrapper.setState({ eventModal: true });

  expect(wrapper.find(DayEvent)).toHaveLength(1);
  expect(wrapper).toMatchSnapshot();
});

it('execute dispatch from props on "add event"', () => {
  propDispatch = jest.fn();

  wrapper = shallow(<Day dispatch={propDispatch} {...props} />);
  wrapper.setState({ eventModal: true });
  wrapper.find(DayEvent).prop('onAddEvent')(
    { preventDefault: jest.fn() },
    { id: 'test', name: 'Test' }
  );

  expect(propDispatch).toHaveBeenCalled()
});

it('execute dispatch from props on "remove event"', () => {
  propDispatch = jest.fn();
  wrapper = shallow(<Day dispatch={propDispatch} {...props} />);
  wrapper.setState({ eventModal: true });
  wrapper.find(DayEvent).prop('onRemoveEvent')();

  expect(propDispatch).toHaveBeenCalled()
});

it('execute closeModal and change state', () => {
  wrapper = shallow(<Day {...props} />);
  wrapper.setState({ eventModal: true });
  wrapper.find(DayEvent).prop('closeModal')({ preventDefault: jest.fn() });

  expect(wrapper.state('eventModal')).toBeFalsy();
});