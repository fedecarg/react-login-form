import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Input from './Input';
import PasswordToggle from './PasswordToggle';

const InputWithIcon = styled(Input)`
  &&& {
    padding-right: 60px;
  }
`;

class PasswordInput extends Component {
  constructor(props) {
    super(props);

    this.toggleInputType = this.toggleInputType.bind(this);

    this.state = {
      inputType: 'password',
    };
  }

  toggleInputType(isPasswordVisible) {
    this.setState({
      inputType: isPasswordVisible ? 'text' : 'password',
    });
  }

  render() {
    return (
      <>
        <PasswordToggle onChange={this.toggleInputType} />
        <InputWithIcon type={this.state.inputType} id={this.props.id} {...this.props} />
      </>
    );
  }
}

PasswordInput.propTypes = {
  id: PropTypes.string,
};

PasswordInput.defaultProps = {
  id: 'password',
};

export default PasswordInput;
