import React from 'react';
import { shallow } from 'enzyme';

import WeekHead from '../WeekHead';

it('render WeekHead correctly', () => {
  const wrapper = shallow(<WeekHead />);

  expect(wrapper).toMatchSnapshot();
});