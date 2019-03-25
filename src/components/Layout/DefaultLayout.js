import styled, { css } from 'styled-components';
import { md } from '../../utils/mq-utils';

const DefaultLayout = styled.div`
  font-family: 'Open Sans',sans-serif;
  margin: 0 auto;

  ${md(css`
    width: 500px;
  `)};
`;

export default DefaultLayout;
