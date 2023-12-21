import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore/lite' 
import { getAuth } from "firebase/auth"

//Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBq6hdnxC2_agjMMgL8ZkWCiNDbjGOnb_0",
  authDomain: "fin-project-3c672.firebaseapp.com",
  projectId: "fin-project-3c672",
  storageBucket: "fin-project-3c672.appspot.com",
  messagingSenderId: "910376517790",
  appId: "1:910376517790:web:0db1067cde80034e223b8f"
};



const app = initializeApp(firebaseConfig)
export const auth = getAuth(app)
const db = getFirestore(app)
export default db