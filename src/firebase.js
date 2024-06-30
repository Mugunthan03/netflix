import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyAJJppPNfibObJFMHpjSHmTozLQ08R-KIU",
  authDomain: "netflix-clone-649aa.firebaseapp.com",
  projectId: "netflix-clone-649aa",
  storageBucket: "netflix-clone-649aa.appspot.com",
  messagingSenderId: "2961063455",
  appId: "1:2961063455:web:eff3fc2d85c101da9e1f2a"
};

  const app = initializeApp(firebaseConfig)
  const auth = getAuth()
  

  export {app,auth}