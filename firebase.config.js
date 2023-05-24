// Import the functions you need from the SDKs you need
import {initializeApp} from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyATZMVLAONop9t-ZMQjGvSeqYTRmKQHqHs",
  authDomain: "spotifyclonebackend.firebaseapp.com",
  projectId: "spotifyclonebackend",
  storageBucket: "spotifyclonebackend.appspot.com",
  messagingSenderId: "789232644816",
  appId: "1:789232644816:web:1162706dd9c8b136ef24d5"
}; 

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth();
export default app;

export { auth }
