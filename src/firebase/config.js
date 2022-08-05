import { initializeApp } from "firebase/app"
import { getAuth, GoogleAuthProvider  } from "firebase/auth"
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyDgeJFObTWxWfDiWgKrmO6wFjYig2wtNao",
  authDomain: "book-77d03.firebaseapp.com",
  projectId: "book-77d03",
  storageBucket: "book-77d03.appspot.com",
  messagingSenderId: "29862994969",
  appId: "1:29862994969:web:7f2e9b61eab12cdcf27688"
};

const app = initializeApp(firebaseConfig)
const auth = getAuth(app)
const provider = new GoogleAuthProvider()
const db = getFirestore()

export { auth, provider}
