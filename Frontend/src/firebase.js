
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyANYAKUrjFsUSTGViQgaUAQHQypqkznVMY",
  authDomain: "deshmin-cf3e0.firebaseapp.com",
  projectId: "deshmin-cf3e0",
  storageBucket: "deshmin-cf3e0.appspot.com",
  messagingSenderId: "759382715645",
  appId: "1:759382715645:web:0737c866590e3457cea294",
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
export { auth, provider };
