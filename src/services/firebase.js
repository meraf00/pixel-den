// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB15YBdC_kzJd-C6VmvX2V__0I6qGXG6n4",
  authDomain: "pixel-den-2e9db.firebaseapp.com",
  projectId: "pixel-den-2e9db",
  storageBucket: "pixel-den-2e9db.appspot.com",
  messagingSenderId: "429998010474",
  appId: "1:429998010474:web:da46ef6082da7546c9da13",
  measurementId: "G-J5D0QJDSS4",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
// const analytics = getAnalytics(app);
