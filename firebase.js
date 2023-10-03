// Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
import * as firebase from "firebase"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCuPbceBnMXm_aJxPjDtXK6XpsBejfmmyY",
  authDomain: "autentica-fire06.firebaseapp.com",
  projectId: "autentica-fire06",
  storageBucket: "autentica-fire06.appspot.com",
  messagingSenderId: "521258908669",
  appId: "1:521258908669:web:90f409170b3c8954663794"
};

// Initialize Firebase
//const app = initializeApp(firebaseConfig);
let app; //variavel global
if (firebase.apps.lenght === 0) {
    app = firebase.initializeApp(firebaseConfig);
} else {
    app = firebase.app()
}
const autentica = firebase.autentica()

export { autentica };