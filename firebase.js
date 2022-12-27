// Import the functions you need from the SDKs you need
import * as firebase from "firebase";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDrsmXe1fJgmOBMzmONRu-Qk71RUnny3ls",
  authDomain: "fir-auth-7dcad.firebaseapp.com",
  projectId: "fir-auth-7dcad",
  storageBucket: "fir-auth-7dcad.appspot.com",
  messagingSenderId: "122598529012",
  appId: "1:122598529012:web:6ff2d880eb3f4043e10ba1",
};

// Initialize Firebase

let app;

if (firebase.apps.length === 0) {
  app = firebase.initializeApp(firebaseConfig);
} else {
  app = firebase.app();
}

const auth = firebase.auth();
export { auth };
