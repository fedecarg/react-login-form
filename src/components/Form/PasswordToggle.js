import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import visibilityOnSvg from '../../assets/svg/visibility-on.svg';
import visibilityOffSvg from '../../assets/svg/visibility-off.svg';

const StyledDiv = styled.div`
  ${(props) =>
    props.isVisible &&
    css`
      background-image: url("${visibilityOnSvg}");
    `} ${(props) =>
  !props.isVisible &&
    css`
      background-image: url("${visibilityOffSvg}");
    `}

  background-position: center;
  background-repeat: no-repeat;
  background-size: 20px;
  bottom: auto;
  cursor: pointer;
  height: 100%;
  left: auto;
  opacity: 0.6;
  position: absolute;
  top: auto;
  right: 20px;
  width: 20px;
  z-index: 2;
`;

const StyledSpan = styled.span`
  height: 0;
  overflow: hidden;
  position: absolute;
  text-transform: uppercase;
  width: 0;
`;

class PasswordToggle extends Component {
  constructor(props) {
    super(props);

    this.onClick = this.onClick.bind(this);

    this.state = {
      isVisible: false,
    };
  }

  onClick() {
    const isVisible = !this.state.isVisible;

    this.setState({ isVisible });
    this.props.onChange(isVisible);
  }

  render() {
    return (
      <StyledDiv onClick={this.onClick} isVisible={this.state.isVisible}>
        <StyledSpan>{this.state.isVisible ? 'hide' : 'show'}</StyledSpan>
      </StyledDiv>
    );
  }
}

PasswordToggle.propTypes = {
  onChange: PropTypes.func.isRequired,
};

export default PasswordToggle;
