// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAiOmUDBmnA7pmLnMs-hC-svrKOE_G1EBo",
  authDomain: "bien-health-4c6ec.firebaseapp.com",
  projectId: "bien-health-4c6ec",
  storageBucket: "bien-health-4c6ec.appspot.com",
  messagingSenderId: "34996737271",
  appId: "1:34996737271:web:43b065c316a2508ff7eff2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app)
export default auth;