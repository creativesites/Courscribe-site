//import { auth } from './firebase';
import PocketBase from 'pocketbase';
//import { async } from '@firebase/util';
import eventsource from 'eventsource';
import eventsource from "react-native-sse";
import 'cross-fetch/polyfill';
const pb = new PocketBase('http://127.0.0.1:8090');

global.EventSource = eventsource;
// Sign Up
export const doCreateUserWithEmailAndPassword = async (email, password, passwordConfirm, name) =>
  //auth.createUserWithEmailAndPassword(email, password);
  await pb.collection('users').create({
    email:           email,
    password:        password,
    passwordConfirm: passwordConfirm,
    name:            name,
});

// Sign In
export const doSignInWithEmailAndPassword = async (email, password) =>
  //auth.signInWithEmailAndPassword(email, password);
  await pb.collection('users').authWithPassword(email, password);

export const doSendEmailVerification = async(email) =>
await pb.collection('users').requestVerification(email);

// Sign out
export const doSignOut = async() =>
  //auth.signOut();
  await pb.authStore.clear();

// Password Reset
export const doPasswordReset = async (email) =>
  //auth.sendPasswordResetEmail(email);
  await pb.collection('users').requestPasswordReset(email);

// Password Change
// export const doPasswordUpdate = (password) =>
//   auth.currentUser.updatePassword(password);
