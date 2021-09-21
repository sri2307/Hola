import firebase from "firebase/app";
import "firebase/auth";


export const auth = firebase.initializeApp({
    apiKey: "AIzaSyA-s37zcksuy5L79do8iHxEZ6VT2ltKwAo",
    authDomain: "hola-2ac5d.firebaseapp.com",
    projectId: "hola-2ac5d",
    storageBucket: "hola-2ac5d.appspot.com",
    messagingSenderId: "586619521845",
    appId: "1:586619521845:web:b78dff40cda9a9fe329a7c",
    measurementId: "G-W7QGW6KM3N"
  }).auth();