
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAA78RCt9K4PaLxTGoO089iFoFE0J-w5IA",
  authDomain: "netflix-clone-c41de.firebaseapp.com",
  projectId: "netflix-clone-c41de",
  storageBucket: "netflix-clone-c41de.firebasestorage.app",
  messagingSenderId: "92923584689",
  appId: "1:92923584689:web:47662eb3cb836bc01c0290",
  measurementId: "G-VTTK2189DX"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);


const signup = async (name, email, password)=>{
  try {
      const res = await createUserWithEmailAndPassword(auth, email, password );
  } catch (error) {
    
  }
}