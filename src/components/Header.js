import React, { Fragment } from 'react';
import styled, { css } from 'styled-components';
import { md } from '../utils/mq-utils';
import DefaultLayout from '../components/Layout/DefaultLayout';

const StyledWrapper = styled.div`
  background: #000;
  color: #fff;
  margin-bottom: 20px;
  padding: 16px 0;

  ${md(css`
    padding: 22px 0;
  `)};
`;

class Header extends React.Component {
  render() {
    return (
      <Fragment>
        <StyledWrapper>
          <DefaultLayout>
            Toggle Password Visibility
          </DefaultLayout>
        </StyledWrapper>
      </Fragment>
    );
  }
}

export default Header;
