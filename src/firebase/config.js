import firebase from "firebase";

import 'firebase/analytics';
import 'firebase/auth';
import 'firebase/firestore';

 const firebaseConfig = {
    apiKey: "AIzaSyBjZUdGHcXHuJSAvaFmZ83aYwvmWNHMmWI",
    authDomain: "chat-app-8430f.firebaseapp.com",
    projectId: "chat-app-8430f",
    storageBucket: "chat-app-8430f.appspot.com",
    messagingSenderId: "626243560759",
    appId: "1:626243560759:web:ff3ca370747716c51ae6b2",
    measurementId: "G-SZ74CKR260"
  };

  // Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics()

const auth=firebase.auth();
const db=firebase.firestore();

auth.useEmulator('http://localhost:9099');
if(window.location.hostname==='localhost'){
  db.useEmulator('localhost', '8080')
}

export { db, auth};
export default firebase;
  