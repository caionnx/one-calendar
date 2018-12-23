import React from 'react';
import { shallow } from 'enzyme';

import Year from '../Year';

let wrapper;
let initialYear;

it('change state to previous year', () => {
  wrapper = shallow(<Year />);
  initialYear = wrapper.state('year');
  wrapper.find('button').at(0).simulate('click');

  expect(wrapper.state('year')).toBe(initialYear - 1);
});

it('change state to next year', () => {
  wrapper = shallow(<Year />);
  initialYear = wrapper.state('year');
  wrapper.find('button').at(1).simulate('click');

  expect(wrapper.state('year')).toBe(initialYear + 1);
});