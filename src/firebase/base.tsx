import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { GoogleAuthProvider, getAuth } from "firebase/auth";
import { getDatabase } from "firebase/database";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDlGMsXRJ2KyRALYdSHZh4qRYq-CKDb1Tg",
  authDomain: "royal-golf-views.firebaseapp.com",
  projectId: "royal-golf-views",
  storageBucket: "royal-golf-views.appspot.com",
  messagingSenderId: "951654412285",
  appId: "1:951654412285:web:3a2ced24fe9b4b4ebdb394",
  measurementId: "G-YC7WEMGQXB"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

export const fireAuth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
export const realtimeDB = getDatabase(app);
export const fireStoreDB = getFirestore(app);
export const storageDB = getStorage(app);
// export const realtimeDB =  