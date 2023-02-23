//import { db } from './firebase';
import PocketBase from 'pocketbase';
import 'cross-fetch/polyfill';
const pb = new PocketBase('http://127.0.0.1:8090');
// User API

export const doCreateUser = async(name, email) =>
  // db.ref(`users/${id}`).set({
  //   username,
  //   email,
  // });
  await pb.collection('users').create({
    email:           email,
    name:            name,
});

export const onceGetUsers = async() =>
  //db.ref('users').once('value');
  await pb.collection('users').get();
// Other db APIs ...
