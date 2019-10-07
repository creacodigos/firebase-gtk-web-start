// Import stylesheets
import './style.css';
// Firebase App (the core Firebase SDK) is always required and must be listed first
import * as firebase from "firebase/app";

// Add the Firebase products that you want to use
import "firebase/auth";
import "firebase/firestore";

import * as firebaseui from 'firebaseui';

// Document elements
const startRsvpButton = document.getElementById('startRsvp');
const guestbookContainer = document.getElementById('guestbook-container');

const form = document.getElementById('leave-message');
const input = document.getElementById('message');
const guestbook = document.getElementById('guestbook');
const numberAttending = document.getElementById('number-attending');
const rsvpYes = document.getElementById('rsvp-yes');
const rsvpNo = document.getElementById('rsvp-no');

var rsvpListener = null;
var guestbookListener = null;

// Add Firebase project configuration object here

var firebaseConfig = {
    apiKey: "AIzaSyAWMFHg7YnKruvXL2hmvu5o-JiciuuhFqs",
    authDomain: "fir-web-codelab-5965d.firebaseapp.com",
    databaseURL: "https://fir-web-codelab-5965d.firebaseio.com",
    projectId: "fir-web-codelab-5965d",
    storageBucket: "fir-web-codelab-5965d.appspot.com",
    messagingSenderId: "151979439766",
    appId: "1:151979439766:web:700440110e7105cb06f4b7"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

// var firebaseConfig = {};

// firebase.initializeApp(firebaseConfig);

// FirebaseUI config
const uiConfig = {
  credentialHelper: firebaseui.auth.CredentialHelper.NONE,
  signInOptions: [
    // Email / Password Provider.
    firebase.auth.EmailAuthProvider.PROVIDER_ID
  ],
  callbacks: {
    signInSuccessWithAuthResult: function(authResult, redirectUrl){
      // Handle sign-in.
      // Return false to avoid redirect.
      return false;
    }
  }
};

// Initialize the FirebaseUI widget using Firebase
const ui = new firebaseui.auth.AuthUI(firebase.auth());

// At the bottom

// Listen to RSVP button clicks
startRsvpButton.addEventListener("click",
 () => {
      ui.start("#firebaseui-auth-container", uiConfig);
});