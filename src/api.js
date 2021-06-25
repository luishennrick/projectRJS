/* eslint-disable import/no-anonymous-default-export */
import firebase from 'firebase/app';
import 'firebase/firebase-auth';
import 'firebase/firebase-firestore';
import firebaseConfig from './firebaseConfig.js';


const firebaseapp = firebase.initializeApp(firebaseConfig);
// eslint-disable-next-line no-unused-vars
const db = firebaseapp.firestore();

export default  {
  
    logingoogle: async () => {

        const provider = new firebase.auth.GoogleAuthProvider();
        let result = await firebase.auth().signInWithPopup(provider);

        return result;
    }


}