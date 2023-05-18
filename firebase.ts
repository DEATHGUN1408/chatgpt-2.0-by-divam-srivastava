import { getApp, getApps, initializeApp } from "firebase/app"
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyDlIjoSwA5MDwijnxf_tXUuTxRsyrb6tmQ",
  authDomain: "chatgpt-messenger-838a8.firebaseapp.com",
  projectId: "chatgpt-messenger-838a8",
  storageBucket: "chatgpt-messenger-838a8.appspot.com",
  messagingSenderId: "828350287060",
  appId: "1:828350287060:web:ad2c4af77056dab89bbf41"
}

// Initialize Firebase
const app = getApps().length ? getApp() : initializeApp(firebaseConfig)
const db = getFirestore(app)

export { db }
