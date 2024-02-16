import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBx5nGoQ6CU_C1bP0vQZimapHkFcD60q3k",
  authDomain: "gdsc-decent-work.firebaseapp.com",
  projectId: "gdsc-decent-work",
  storageBucket: "gdsc-decent-work.appspot.com",
  messagingSenderId: "202612051892",
  appId: "1:202612051892:web:3e8ebd262bc389794aece1",
  measurementId: "G-R07LD69HVS"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);