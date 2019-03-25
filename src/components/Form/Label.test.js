import React from 'react';
import { shallow } from 'enzyme';
import Label from './Label';

it('matches current snapshot', () => {
  const Component = shallow(<Label />);
  expect(Component).toMatchSnapshot();
});

it('contains required default styles', () => {
  const Component = shallow(<Label />);
  expect(Component).toHaveStyleRule('text-transform', 'uppercase');
});
