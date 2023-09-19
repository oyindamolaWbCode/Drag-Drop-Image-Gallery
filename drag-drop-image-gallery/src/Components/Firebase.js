
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyB6me7rMfjTRz_XygvremBO0xOJsaZqWtA",
  authDomain: "drag-and-drop-image-gall-8562e.firebaseapp.com",
  projectId: "drag-and-drop-image-gall-8562e",
  storageBucket: "drag-and-drop-image-gall-8562e.appspot.com",
  messagingSenderId: "479161203423",
  appId: "1:479161203423:web:75eee5a1b2dd8157fb876a",
  measurementId: "G-QHT4PSJZF0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const database = getAuth(app)