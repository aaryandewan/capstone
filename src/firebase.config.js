import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDqYRKoqfyiUK15dGoS15xUwR73pZ-upn8",
  authDomain: "find-hackers-852ef.firebaseapp.com",
  projectId: "find-hackers-852ef",
  storageBucket: "find-hackers-852ef.appspot.com",
  messagingSenderId: "387536666126",
  appId: "1:387536666126:web:69f277cb5e9dfc5541065f",
  measurementId: "G-EC2T60YX09"
};

// Initialize Firebase
export const firebaseApp = initializeApp(firebaseConfig);
export const auth = getAuth(firebaseApp);
