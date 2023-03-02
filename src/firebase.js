// @ts-nocheck
import * as firebase from 'firebase/app';

import { getAnalytics } from "firebase/analytics";

import "firebase/auth"
import "firebase/firestore"

const firebaseConfig = {

    apiKey: "AIzaSyBg4q5V2K7X2qwnYCzBprci_34QvrrpbvE",

    authDomain: "svelte-app-real.firebaseapp.com",

    projectId: "svelte-app-real",

    storageBucket: "svelte-app-real.appspot.com",

    messagingSenderId: "952525683530",

    appId: "1:952525683530:web:0f841aada575ba57f19fb3",

    measurementId: "G-1YQG81KVPF"


};

firebase.initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = firebase.auth();
export const googleProvider = new firebase.auth.GoogleAuthProvider();
export const db = firebase.firestore();
