// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBcR5yPy1tbwTZhI5qzXzONqlQFPMH4ITk",
    authDomain: "your-private-dentist.firebaseapp.com",
    projectId: "your-private-dentist",
    storageBucket: "your-private-dentist.appspot.com",
    messagingSenderId: "888423254074",
    appId: "1:888423254074:web:0a3d33e962641611f70d03"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;