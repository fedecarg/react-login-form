import React from 'react';
import { shallow } from 'enzyme';
import PasswordToggle from './PasswordToggle';
import visibilityOnSvg from '../../assets/svg/visibility-on.svg';
import visibilityOffSvg from '../../assets/svg/visibility-off.svg';

it('matches current snapshot', () => {
  const Component = shallow(<PasswordToggle onChange={() => true} />);
  expect(Component).toMatchSnapshot();
});

it('renders with default password visibility', () => {
  const Component = shallow(<PasswordToggle onChange={() => true} />);
  expect(Component.prop('isVisible')).toEqual(false);
});

it('changes password visibility when clicked', () => {
  const Component = shallow(<PasswordToggle onChange={() => true} />);
  Component.simulate('click');
  expect(Component.prop('isVisible')).toEqual(true);
});

it('renders with default background image', () => {
  const Component = shallow(<PasswordToggle onChange={() => true} />);
  expect(Component).toHaveStyleRule('background-image', `url("${visibilityOffSvg}")`);
});

it('changes background image when clicked', () => {
  const Component = shallow(<PasswordToggle onChange={() => true} />);
  Component.simulate('click');
  expect(Component).toHaveStyleRule('background-image', `url("${visibilityOnSvg}")`);
});

it('calls onChange function when clicked', () => {
  const onChangeFn = jest.fn(() => true);
  const Component = shallow(<PasswordToggle onChange={onChangeFn} />);
  Component.simulate('click');
  expect(onChangeFn).toHaveBeenCalled();
});
