import styled from 'styled-components';

const Input = styled.input`
  border: none;
  box-sizing: border-box;
  font-size: 16px;
  padding: 0;
  width: 100%;

  &:-webkit-autofill {
    -webkit-box-shadow: 0 0 0 50px #30344a inset;
    -webkit-text-fill-color: #fff;
  }

  &:focus {
    outline: none;
  }
`;

Input.defaultProps = {
  type: 'text',
};

export default Input;
