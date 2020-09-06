import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDXPAWa1jijGFnaSuh8_EhfJSXUj1ddSKY",
  authDomain: "face-check-e48c1.firebaseapp.com",
  databaseURL: "https://face-check-e48c1.firebaseio.com",
  projectId: "face-check-e48c1",
  storageBucket: "face-check-e48c1.appspot.com",
  messagingSenderId: "55732430387",
  appId: "1:55732430387:web:65b6e2e5f1936cf1c06546",
};

// Initialize firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);

// Access firebase services
const db = firebaseApp.firestore();
const auth = firebase.auth();

// Instantiate
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider, db };
