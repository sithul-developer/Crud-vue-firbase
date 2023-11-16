import firebase from 'firebase/compat/app'
import "firebase/compat/firestore";
 
const firebaseConfig = {
    apiKey: "AIzaSyDRQa-KVBa9MdsnjPQGND_QrtWYs4jIyQM",
    authDomain: "ecommerce-977c4.firebaseapp.com",
    projectId: "ecommerce-977c4",
    storageBucket: "ecommerce-977c4.appspot.com",
    messagingSenderId: "77105771770",
    appId: "1:77105771770:web:38b687d92eabf96f518543"
};

firebase.initializeApp(firebaseConfig);
const projectFirestore = firebase.firestore();
export  { projectFirestore };
