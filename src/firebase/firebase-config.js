import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
	apiKey: 'AIzaSyDzPmsJn7Hndsd7WCv-aRXXbPjQpWfOfto',
	authDomain: 'journal-app-f4153.firebaseapp.com',
	projectId: 'journal-app-f4153',
	storageBucket: 'journal-app-f4153.appspot.com',
	messagingSenderId: '445007707188',
	appId: '1:445007707188:web:bbdb2df99661006acf1e61',
	measurementId: 'G-K80SZW06W9',
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
// firebase.analytics();

const db = firebase.firestore();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export { db, googleAuthProvider, firebase };
