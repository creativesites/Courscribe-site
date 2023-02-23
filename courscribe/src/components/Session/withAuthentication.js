import React from 'react';
import { connect } from 'react-redux';

import { firebase } from '../../firebase';
import PocketBase, { BaseAuthStore } from 'pocketbase';
const pb = new PocketBase('http://127.0.0.1:8090');
//const authStore = new BaseAuthStore(pb);

const withAuthentication = (Component) => {
  class WithAuthentication extends React.Component {
    componentDidMount() {
      const { onSetAuthUser } = this.props;
      const authData =  pb.collection('users').authRefresh();
      firebase.auth.onAuthStateChanged(authUser => {
        authUser
          ? onSetAuthUser(authUser)
          : onSetAuthUser(null);
      });
    }

    render() {
      return (
        <Component { ...this.props } />
      );
    }
  }

  const mapDispatchToProps = (dispatch) => ({
    onSetAuthUser: (authUser) => dispatch({ type: 'AUTH_USER_SET', authUser }),
  });

  return connect(null, mapDispatchToProps)(WithAuthentication);
}

export default withAuthentication;