import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyA1Gt2OS37NVD67196yp42QqV1UFSC7-EQ",
  authDomain: "netflix-1a279.firebaseapp.com",
  projectId: "netflix-1a279",
  storageBucket: "netflix-1a279.appspot.com",
  messagingSenderId: "827252636703",
  appId: "1:827252636703:web:f2dea661ce29406b6fa92a"
};

  const app = initializeApp(firebaseConfig)
  const auth = getAuth()
  

  export {app,auth}