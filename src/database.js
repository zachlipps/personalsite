
import * as firebase from "firebase/app";
require("firebase/auth");
require("firebase/database");


const firebaseConfig = {
  apiKey: "AIzaSyDhZs2mDFs1xEEiBAx-gZo7Yp0OuuQavno",
  authDomain: "zlippssite.firebaseapp.com",
  databaseURL: "https://zlippssite.firebaseio.com",
  projectId: "zlippssite",
  storageBucket: "zlippssite.appspot.com",
  messagingSenderId: "243039438823",
  appId: "1:243039438823:web:cee749e856f721a4da5f42"
};
// Initialize Firebase


firebase.initializeApp(firebaseConfig);

export const database = firebase.database();

export const GoogleAuthProvider = new firebase.auth.GoogleAuthProvider();

export const auth = firebase.auth();

