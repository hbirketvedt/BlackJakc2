import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"
import {getAuth} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyA5JB5RzFfjlIBw8xCsMVP6XW5ZKFxGeVI",
  authDomain: "blackjack-ce195.firebaseapp.com",
  projectId: "blackjack-ce195",
  storageBucket: "blackjack-ce195.appspot.com",
  messagingSenderId: "1051658033497",
  appId: "1:1051658033497:web:048ed868ed07daa7a71448",
  measurementId: "G-9WFC74E3T6"
};


const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
