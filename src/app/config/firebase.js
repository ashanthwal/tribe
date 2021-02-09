import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/database";
import "firebase/auth";
import "firebase/storage";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: "events-app-2019.firebaseapp.com",
  databaseURL: "https://events-app-2019-default-rtdb.firebaseio.com/",
  projectId: "events-app-2019",
  storageBucket: "events-app-2019.appspot.com",
  messagingSenderId: "83839972000",
  appId: "1:83839972000:web:8d5bc494936c2f15b5cfc5",
  measurementId: "G-392052EDJQ",
};

firebase.initializeApp(firebaseConfig);
firebase.firestore();

export default firebase;
