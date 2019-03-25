import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import HomePage from './pages/HomePage';
import SignInPage from './pages/SignInPage';

const App = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/sign-in" component={SignInPage} />
      <Route exact path="/:id?" component={HomePage} />
    </Switch>
  </BrowserRouter>
);

export default App;
