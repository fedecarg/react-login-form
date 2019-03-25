import styled from 'styled-components';
import Label from '../Form/Label';
import Input from '../Form/Input';

const FloatedLabelWrapper = styled.div`
  background-color: #222;
  border-radius: 3px;
  height: 67px;
  margin: 12px 0 18px;
  overflow: hidden;
  position: relative;

  &:hover,
  &:focus {
    cursor: text;
  }

  ${Label}, ${Input} {
    margin: 0;
    padding: 0 20px;
    position: absolute;

    &:hover,
    &:focus {
      cursor: text;
    }
  }

  ${Label} {
    display: inline-block;
    top: 24px;
    transition: 0.3s all ease;
  }

  ${Input} {
    bottom: 0;
    background: none;
    color: #fff;
    left: 0;
    padding-top: 16px;
    top: 0;

    &:valid + label,
    &:focus + label {
      font-size: 14px;
      top: 10px;
    }

    &:focus + label {
      color: #c5c7ce;
    }
  }
`;

export default FloatedLabelWrapper;
