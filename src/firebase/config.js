import { initializeApp } from "firebase/app";
import { initializeFirestore, serverTimestamp } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { getAuth } from "firebase/auth";
// Firebase config aqui embaixo
const firebaseConfig = {
  apiKey: "AIzaSyBjeb_t64whZgpE8-g8eKrD4bnIrgs9IkY",
  authDomain: "nutri-ai-6e67c.firebaseapp.com",
  projectId: "nutri-ai-6e67c",
  storageBucket: "nutri-ai-6e67c.appspot.com",
  messagingSenderId: "354776018033",
  appId: "1:354776018033:web:3a72c5d4acfb88770c7fd0"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

// Initialize services
const db = initializeFirestore(firebaseApp, {
  ignoreUndefinedProperties: true,
});
const auth = getAuth(firebaseApp);
const storage = getStorage(firebaseApp);

// Timestamp
const timestamp = serverTimestamp();

export { db, auth, storage, timestamp };
