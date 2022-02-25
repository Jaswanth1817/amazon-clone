import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCr8_FaVHquvgGhUO0T9BMEsHq6LJs46yk",
  authDomain: "clone-df25a.firebaseapp.com",
  projectId: "clone-df25a",
  storageBucket: "clone-df25a.appspot.com",
  messagingSenderId: "275153896021",
  appId: "1:275153896021:web:da41855ff1ceb48d9ccadc",
  measurementId: "G-JLSCJVFM0W"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };