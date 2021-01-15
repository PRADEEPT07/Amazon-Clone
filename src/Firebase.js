import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyBcq1dwIk4DLGfZFPZAiwGENV1oXT1TKKA",
    authDomain: "clone-81efc.firebaseapp.com",
    projectId: "clone-81efc",
    storageBucket: "clone-81efc.appspot.com",
    messagingSenderId: "859509869651",
    appId: "1:859509869651:web:118420345f4647fb540aa6",
    measurementId: "G-XKTRHNJ31N"
  };
const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export {db, auth};