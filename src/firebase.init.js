// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBmj8IVoHOMoCJa89o3TQ51XjegYj6_PKw",
  authDomain: "wholesell-5e6d8.firebaseapp.com",
  projectId: "wholesell-5e6d8",
  storageBucket: "wholesell-5e6d8.appspot.com",
  messagingSenderId: "1018761938622",
  appId: "1:1018761938622:web:404807cd2a78d4fcca80ef"
};
// const firebaseConfig = {
//   apiKey:process.env.REACT_APP_apiKey,
//   authDomain:process.env.REACT_APP_authDomain,
//   projectId:process.env.REACT_APP_projectId,
//   storageBucket:process.env.REACT_APP_storageBucket,
//   messagingSenderId:process.env.REACT_APP_messagingSenderId,
//   appId:process.env.REACT_APP_appId,
// };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;