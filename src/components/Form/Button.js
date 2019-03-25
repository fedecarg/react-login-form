import styled from 'styled-components';
import whiteChevron from '../../assets/svg/chevron-white.svg';

const Button = styled.button`
  background-color: #278600;
  border: none;
  border-radius: 3px;
  color: #fff;
  font-size: 16px;
  font-weight: bold;
  margin: 0;
  height: 67px;
  letter-spacing: 2.63px;
  text-transform: uppercase;

  &:after {
    content: url(${whiteChevron});
    margin-left: 6px;
  }
`;

export default Button;
