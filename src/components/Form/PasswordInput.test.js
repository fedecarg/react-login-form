import React from 'react';
import { shallow, mount } from 'enzyme';
import PasswordInput from './PasswordInput';

it('matches current snapshot', () => {
  const Component = shallow(<PasswordInput />);
  expect(Component).toMatchSnapshot();
});

it('contains styled input field', () => {
  const Component = shallow(<PasswordInput />);
  expect(Component.childAt(1).name()).toEqual('Styled(styled.input)');
});

it('adds "id" attribute to the input field', () => {
  const Component = shallow(<PasswordInput id="password" />);
  expect(Component.childAt(1).prop('id')).toEqual('password');
});

it('hides password by default', () => {
  const Component = mount(<PasswordInput />);
  expect(Component.childAt(1).prop('type')).toEqual('password');
});

it('contains password toggle', () => {
  const Component = shallow(<PasswordInput />);
  expect(Component.childAt(0)).toHaveLength(1);
});

it('shows password when password toggle is clicked', () => {
  const Component = mount(<PasswordInput />);
  Component.childAt(0).simulate('click');
  expect(Component.childAt(1).prop('type')).toEqual('text');
});

it('toggles password visibility when password toggle is clicked twice', () => {
  const Component = mount(<PasswordInput />);

  Component.childAt(0).simulate('click');
  expect(Component.childAt(1).prop('type')).toEqual('text');

  Component.childAt(0).simulate('click');
  expect(Component.childAt(1).prop('type')).toEqual('password');
});
