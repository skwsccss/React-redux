import React from 'react';
import { withRouter } from 'react-router-dom';
import { compose } from 'recompose';
import { withFireBase } from '../FireBase';
const withAuthorization = (isProtected, isAuthPage) => Component => {
  class WithAuthorization extends React.Component {
    componentDidMount() {
      this.listener = this.props.firebase.auth.onAuthStateChanged(
        authUser => {
          if (authUser == null) {
            if (isProtected) {
              this.props.history.push('/auth/login');
            }
          } else {
            if (isAuthPage) {
              this.props.history.push('/dashboard');
            }
          }
        },
      );
    }
    componentWillUnmount() {
      this.listener();
    }
    render() {
      return (
        <Component {...this.props} />
      );
    }
  }
  return compose(
    withRouter,
    withFireBase,
  )(WithAuthorization);
};
export default withAuthorization;