// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBG-02Gte_klBYZNF9hxHSeaahLF91SfdA",
  authDomain: "netflix-gpt-2a6d1.firebaseapp.com",
  projectId: "netflix-gpt-2a6d1",
  storageBucket: "netflix-gpt-2a6d1.appspot.com",
  messagingSenderId: "939836864687",
  appId: "1:939836864687:web:1bc5e188d9ed0bf61a3c5a",
  measurementId: "G-5PMKHV3RH7",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
