import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import DefaultLayout from '../components/Layout/DefaultLayout';

class HomePage extends React.Component {
  render() {
    const isLoggedIn = this.props.match.params.id === '123456789' || false;

    return (
      <>
        <Header />
        <DefaultLayout>
          {isLoggedIn && <p>User is logged in!</p>}
          {!isLoggedIn && <Link to="/sign-in">Sign in</Link>}
        </DefaultLayout>
      </>
    );
  }
}

HomePage.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.number
    })
  })
};

export default HomePage;
