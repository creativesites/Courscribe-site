import React from "react";
import { connect } from "react-redux";

import { PasswordForgetForm } from "./pw-forget";
import { AppWithAuthorization } from "../components/App";
import PasswordChangeForm from "../components/PasswordChange";

const AccountPage = ({ authUser }) => (
  <AppWithAuthorization>
    <h1>Account: {authUser.email}</h1>
    <PasswordForgetForm />
    <PasswordChangeForm />
  </AppWithAuthorization>
);

const mapStateToProps = state => ({
  authUser: state.sessionState.authUser
});

export default connect(mapStateToProps)(AccountPage);
