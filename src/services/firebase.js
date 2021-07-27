import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyCosyMjk66C9nAOM75W2IKTkcMUTusMtYU',
  authDomain: 'gestaoencomendas-46256.firebaseapp.com',
  projectId: 'gestaoencomendas-46256',
  storageBucket: 'gestaoencomendas-46256.appspot.com',
  messagingSenderId: '1011697500292',
  appId: '1:1011697500292:web:f3fb8fe64835534ba7c2d1',
};

let app;

if (firebase.apps.length === 0) {
  app = firebase.initializeApp(firebaseConfig);
} else {
  app = firebase.app();
}

const db = app.firestore();
const auth = firebase.auth();

export { db, auth };
