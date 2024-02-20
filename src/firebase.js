import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBx5nGoQ6CU_C1bP0vQZimapHkFcD60q3k",
  authDomain: "gdsc-decent-work.firebaseapp.com",
  projectId: "gdsc-decent-work",
  storageBucket: "gdsc-decent-work.appspot.com",
  messagingSenderId: "202612051892",
  appId: "1:202612051892:web:3e8ebd262bc389794aece1",
  measurementId: "G-R07LD69HVS"
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
       const firestore = getFirestore(app);
export default firestore;
