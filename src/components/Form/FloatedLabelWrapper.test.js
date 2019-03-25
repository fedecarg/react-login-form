import React from 'react';
import { shallow, mount } from 'enzyme';
import { css } from 'styled-components';
import FloatedLabelWrapper from './FloatedLabelWrapper';
import Input from './Input';
import Label from './Label';

it('matches current snapshot', () => {
  const Component = shallow(<FloatedLabelWrapper />);
  expect(Component).toMatchSnapshot();
});

it('contains required default styles', () => {
  const Component = shallow(<FloatedLabelWrapper />);
  expect(Component).toHaveStyleRule('position', 'relative');
  // prettier-ignore
  expect(Component).toHaveStyleRule('cursor', 'text', {
    modifier: css`:hover`
  });
});

it('wraps input field', () => {
  const Component = mount(
    <FloatedLabelWrapper>
      <Input />
    </FloatedLabelWrapper>
  );
  expect(
    Component.find(Input)
      .childAt(0)
      .type()
  ).toEqual('input');
});

it('positions input field', () => {
  const Component = mount(
    <FloatedLabelWrapper>
      <Input />
    </FloatedLabelWrapper>
  );
  // prettier-ignore
  expect(Component).toHaveStyleRule('position', 'absolute', {
    modifier: css`${Input}`
  });
});

it('wraps label', () => {
  const Component = mount(
    <FloatedLabelWrapper>
      <Label />
    </FloatedLabelWrapper>
  );
  expect(
    Component.find(Label)
      .childAt(0)
      .type()
  ).toEqual('label');
});

it('positions label', () => {
  const Component = mount(
    <FloatedLabelWrapper>
      <Label />
    </FloatedLabelWrapper>
  );
  // prettier-ignore
  expect(Component).toHaveStyleRule('position', 'absolute', {
    modifier: css`${Label}`
  });
});
