import firebase from "firebase";
require("@firebase/firestore");

//Paste your firebaseConfig here
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDFEbG6364YAmEMtlyns2op6vwqqJrw3KY",
  authDomain: "project-71-2fad6.firebaseapp.com",
  databaseURL: "https://project-71-2fad6-default-rtdb.firebaseio.com",
  projectId: "project-71-2fad6",
  storageBucket: "project-71-2fad6.appspot.com",
  messagingSenderId: "916007704226",
  appId: "1:916007704226:web:f3893d4113c0fe32d829fb"
};
//
firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
