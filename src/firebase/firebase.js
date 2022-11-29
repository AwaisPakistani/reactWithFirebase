// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from '@firebase/firestore';
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC2dL-0LYLIYBFgxVDLmnnDNrPI18XhTNo",
  authDomain: "simplecrud-62316.firebaseapp.com",
  projectId: "simplecrud-62316",
  storageBucket: "simplecrud-62316.appspot.com",
  messagingSenderId: "120904299951",
  appId: "1:120904299951:web:db9a41a162a5b959e92b5a",
  measurementId: "G-F00Q2LEVXW"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db=getFirestore(app);
