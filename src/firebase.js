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
