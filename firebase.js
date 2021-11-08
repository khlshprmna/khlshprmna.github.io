// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyA4Gw24pilh1-tV1fEh5o_akxXAvUMNWEA",
    authDomain: "khlshprmna.firebaseapp.com",
    projectId: "khlshprmna",
    storageBucket: "khlshprmna.appspot.com",
    messagingSenderId: "417006866581",
    appId: "1:417006866581:web:47a2694cc1935a4f7f8b9c",
    measurementId: "G-SH7N28DZV8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);