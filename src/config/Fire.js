import firebase from 'firebase';

// Initialize Firebase
const config = {
    apiKey: "AIzaSyAKBfwUnbPANQ2AdlPUuZyl8eGF8yUL2rM",
    authDomain: "flashcube-35428.firebaseapp.com",
    databaseURL: "https://flashcube-35428.firebaseio.com",
    projectId: "flashcube-35428",
    storageBucket: "flashcube-35428.appspot.com",
    messagingSenderId: "434613234339"
};
const fire = firebase.initializeApp(config);
const facebookProvider = new firebase.auth.FacebookAuthProvider()

export { fire, facebookProvider };
