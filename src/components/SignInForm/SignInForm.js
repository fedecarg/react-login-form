import React, { Component } from 'react';
import styled from 'styled-components';
import Form from '../Form/Form';
import Input from '../Form/Input';
import Label from '../Form/Label';
import FloatedLabelWrapper from '../Form/FloatedLabelWrapper';
import PasswordInput from '../Form/PasswordInput';
import Button from '../Form/Button';


const StyledButton = styled(Button)`
  margin-top: 11px;
`;

class SignInForm extends Component {
  onSubmit(e) {
    e.preventDefault();
    window.location.href = '/123456789';
  }

  render() {
    return (
      <Form>
        <FloatedLabelWrapper>
          <Input type="text" id="email" required />
          <Label htmlFor="email" data-test="email">
            Email
          </Label>
        </FloatedLabelWrapper>

        <FloatedLabelWrapper>
          <PasswordInput id="password" required />
          <Label htmlFor="password" data-test="password">
            Password
          </Label>
        </FloatedLabelWrapper>

        <StyledButton onClick={this.onSubmit.bind(this)}>Sign In</StyledButton>
      </Form>
    );
  }
}

export default SignInForm;
