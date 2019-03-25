import React from 'react';
import { shallow } from 'enzyme';
import { css } from 'styled-components';
import Input from './Input';

it('matches current snapshot', () => {
  const Component = shallow(<Input />);
  expect(Component).toMatchSnapshot();
});

it('renders input tag with default type', () => {
  const Component = shallow(<Input />);
  expect(Component.prop('type')).toEqual('text');
});

it('contains required default styles', () => {
  const Component = shallow(<Input />);
  expect(Component).toHaveStyleRule('border', 'none');
  expect(Component).toHaveStyleRule('box-sizing', 'border-box');
  // prettier-ignore
  expect(Component).toHaveStyleRule('outline', 'none', {
    modifier: css`:focus`
  });
});
