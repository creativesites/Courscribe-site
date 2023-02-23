import firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";
import { getApps, initializeApp } from "firebase/app";
const { getFirestore } = require('firebase-admin/firestore');
import { getAuth } from "firebase/auth";

const prodConfig = {
  apiKey: 'YAIzaSyD3G3RHroX8a8ivCzEN_otv4fv7VXiQLM4',
  authDomain: 'courscribe.firebaseapp.com',
  databaseURL: 'https://users.firebaseio.com',
  projectId: 'courscribe',
  storageBucket: 'courscribe.appspot.com',
  messagingSenderId: '929223268621'
};

const devConfig = {
  apiKey: 'YAIzaSyD3G3RHroX8a8ivCzEN_otv4fv7VXiQLM4',
  authDomain: 'courscribe.firebaseapp.com',
  databaseURL: 'https://users.firebaseio.com',
  projectId: 'courscribe',
  storageBucket: 'courscribe.appspot.com',
  messagingSenderId: '929223268621'
};

const config = process.env.NODE_ENV === "production" ? prodConfig : devConfig;

if (getApps().length < 1) {
  initializeApp(devConfig);
  // Initialize other firebase products here
}

const db = getFirestore();
const auth = getAuth();

export { db, auth };
