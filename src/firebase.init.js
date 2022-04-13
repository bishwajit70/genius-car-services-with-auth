// Import the functions you need from the SDKs you need
import { getAuth } from "@firebase/auth";
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBmIQxqFlXXfVWNctnJ_G5ndWXdYEbNDwU",
  authDomain: "genius-car-service-with-auth.firebaseapp.com",
  projectId: "genius-car-service-with-auth",
  storageBucket: "genius-car-service-with-auth.appspot.com",
  messagingSenderId: "744794566557",
  appId: "1:744794566557:web:05ebfd5a46680b77f0c974"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app)

export default auth;