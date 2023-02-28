
import { firebase } from "firebase/app";
import "firebase/auth"
import "firebase/firestore"


const firebaseConfig = {

    apiKey: "AIzaSyCpgE568oShsjcpVeK7-iJovu7-0k14wRw",

    authDomain: "svelte-chat-app-af49a.firebaseapp.com",

    projectId: "svelte-chat-app-af49a",

    storageBucket: "svelte-chat-app-af49a.appspot.com",

    messagingSenderId: "1056741567538",

    appId: "1:1056741567538:web:f1006302782afdd17e202b",

    measurementId: "G-77Z7FWQR5H"

};

firebase.intializeApp(firebaseConfig);

export const auth = firebase.auth();
export const googleProvider = new firebase.auth.GoogleAuthProvider();
export const db = firebase.firestore();
