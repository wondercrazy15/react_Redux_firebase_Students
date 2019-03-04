
import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

var config = {
  apiKey: "AIzaSyC3rMi8Lx9NfDlfTLrcpTdry8mn_uP2Wok",
  authDomain: "studentlist-48818.firebaseapp.com",
  databaseURL: "https://studentlist-48818.firebaseio.com",
  projectId: "studentlist-48818",
  storageBucket: "studentlist-48818.appspot.com",
  messagingSenderId: "997233222276"
};
firebase.initializeApp(config);
firebase.firestore();
export default firebase