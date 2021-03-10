import React from 'react';
import { BrowserRouter as Router, Switch, Route ,Redirect} from 'react-router-dom'
import { connect } from 'react-redux'
import Login from './redux/containers/Login';
import UsersPage from './usersPage';

import './App.css'


const PrivateRoute = ({ component: Component, isAuthenticated, ...rest }) => (
  <Route
    {...rest}
    render={props => (
      isAuthenticated
        ? (
          <Component {...props} />
        )
        : (<Redirect to={{ pathname: '/', state: { from: props.location } }} />)
    )}
  />
);


function App(props) {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Login} />
        <PrivateRoute exact path="/UsersPage"  component={UsersPage} isAuthenticated={props.auth} />
      </Switch>
    </Router>
  );
}
const mapstateToProps = (state) => ({
  auth: state.auth.auth
})

export default connect(mapstateToProps, null)(App);
