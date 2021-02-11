/*
 * Copyright (c) 2021.
 * Joey Stoetzel, github.com/Joeyrstz
 * This project is part of my portfolio and was developed for educational and presentation purposes.
 * The use of the project for internal, external or profit-oriented purposes is prohibited without my consent.
 */

import firebase from "firebase";
import 'firebase/firestore';
import "firebase/auth";

const config = {
    apiKey: "AIzaSyAAeyK2g37mMYW61GACJ3nWrg2kc8V-1o4",
    authDomain: "crwn-db-ea572.firebaseapp.com",
    projectId: "crwn-db-ea572",
    storageBucket: "crwn-db-ea572.appspot.com",
    messagingSenderId: "592373863183",
    appId: "1:592373863183:web:fbf7a90b65f6607205647a",
    measurementId: "G-GFZTNR28BV"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;