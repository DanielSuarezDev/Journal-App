import firebase from "firebase/app";
import 'firebase/firestore';
import 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyDwFnFHmcuSLmn3YO7-gP7tXWb0BANqzFQ",
    authDomain: "journal-app-38be6.firebaseapp.com",
    projectId: "journal-app-38be6",
    storageBucket: "journal-app-38be6.appspot.com",
    messagingSenderId: "1083549621283",
    appId: "1:1083549621283:web:bb7ae5e539253fe3022596",
    measurementId: "G-ZESP8XHY8X"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  const db = firebase.firestore();
  const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

  export {
      db,
      googleAuthProvider,
      firebase
  }