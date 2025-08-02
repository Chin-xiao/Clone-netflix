import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { addDoc, collection, getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAA78RCt9K4PaLxTGoO089iFoFE0J-w5IA",
  authDomain: "netflix-clone-c41de.firebaseapp.com",
  projectId: "netflix-clone-c41de",
  storageBucket: "netflix-clone-c41de.firebasestorage.app",
  messagingSenderId: "92923584689",
  appId: "1:92923584689:web:47662eb3cb836bc01c0290",
  measurementId: "G-VTTK2189DX",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

const signup = async (name, email, password)=>{
  try {
      const res = await createUserWithEmailAndPassword(auth, email, password );
      const user = res.user;
      await addDoc(collection(db, "user"),{ 
        uid: user.uide,
        name,
        authProvider: "local",
        email,
      });
  } catch (error) {
    console.log(error);
    alert(error);
  }
}

const login = async (email, password)=>{
  try {
    await signInWithEmailAndPassword(auth, email, password)
  } catch (error) {
    console.log(error);
    alert(error);
  }
}

const logout = ()=>{
  signOut(auth);

}

export {auth, db, login, signup, logout};
