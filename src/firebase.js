import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCm7-q9Vdab3C7d0CGpdpea8pFsG29qlQg",
  authDomain: "netflix-clone-222f7.firebaseapp.com",
  projectId: "netflix-clone-222f7",
  storageBucket: "netflix-clone-222f7.appspot.com",
  messagingSenderId: "377382285906",
  appId: "1:377382285906:web:96f2502321fb7335d5a58b",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth };
export default db;
