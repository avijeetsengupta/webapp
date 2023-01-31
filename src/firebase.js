import firebase from "firebase/app";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDHJ65jJAV_xMX4y6_iDRkauYsT3Go_YXw",
  authDomain: "webb-app-tv.firebaseapp.com",
  projectId: "webb-app-tv",
  storageBucket: "webb-app-tv.appspot.com",
  messagingSenderId: "947678703772",
  appId: "1:947678703772:web:265246877143f79393fd59",
};
firebase.initializeApp(firebaseConfig);
export const auth = firebase.auth();

{
  /*
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDHJ65jJAV_xMX4y6_iDRkauYsT3Go_YXw",
  authDomain: "webb-app-tv.firebaseapp.com",
  projectId: "webb-app-tv",
  storageBucket: "webb-app-tv.appspot.com",
  messagingSenderId: "947678703772",
  appId: "1:947678703772:web:265246877143f79393fd59",
  measurementId: "G-HW0D3Y65J0",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app); 
*/
}
