import React from 'react';
import { shallow } from 'enzyme';

import Month from '../Month';

it('render month correctly', () => {
  const wrapper = shallow(<Month name='January' index='0' year={2018} />);

  expect(wrapper).toMatchSnapshot();
});