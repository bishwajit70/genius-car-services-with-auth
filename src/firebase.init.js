// Import the functions you need from the SDKs you need
import { getAuth } from "@firebase/auth";
import { getSpaceUntilMaxLength } from "@testing-library/user-event/dist/utils";
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC7JhdXhUbNu2z-EreeX7HyVMqm3V6_J58",
  authDomain: "genius-car-services-6c853.firebaseapp.com",
  projectId: "genius-car-services-6c853",
  storageBucket: "genius-car-services-6c853.appspot.com",
  messagingSenderId: "449552492201",
  appId: "1:449552492201:web:66b07d638e4de947572bb8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app)

export default auth;