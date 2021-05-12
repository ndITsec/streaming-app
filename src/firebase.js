import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyCS4xI5MYZL0vG9ewYkOT-J2HlWitCwHGw",
  authDomain: "nditsec-prime.firebaseapp.com",
  projectId: "nditsec-prime",
  storageBucket: "nditsec-prime.appspot.com",
  messagingSenderId: "306564133486",
  appId: "1:306564133486:web:94451fb67d16509ac42c7f",
  measurementId: "G-FGTRTRV76D"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebaseApp.auth();

export { auth };
export default db;