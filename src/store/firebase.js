import firebase from "firebase";
import 'firebase/firestore';

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyAMRATUFUnMkHqUuQvZIPDKLseZAUl4TEc",
    authDomain: "playground-31445.firebaseapp.com",
    databaseURL: "https://playground-31445.firebaseio.com",
    projectId: "playground-31445",
    storageBucket: "playground-31445.appspot.com",
    messagingSenderId: "157532476617",
    appId: "1:157532476617:web:3376cf0795d15b5b32e918",
    measurementId: "G-MVCF7HZVK5"
});

const db = firebaseApp.firestore();

export { db };