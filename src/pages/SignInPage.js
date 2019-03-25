import React from 'react';
import SignInForm from '../components/SignInForm/SignInForm';
import Header from '../components/Header';
import DefaultLayout from '../components/Layout/DefaultLayout';

class SignInPage extends React.Component {
  render() {
    return (
      <>
        <Header />
        <DefaultLayout>
          <h1>Sign in to your account</h1>
          <SignInForm />
        </DefaultLayout>
      </>
    );
  }
}

export default SignInPage;
