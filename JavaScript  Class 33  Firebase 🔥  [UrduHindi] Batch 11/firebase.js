 import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.4/firebase-app.js";
 import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.12.4/firebase-analytics.js";
 import { getAuth,createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.12.4/firebase-auth.js";


 const firebaseConfig = {
   apiKey: "AIzaSyAAFCfzc0RM7pWN54L79Q5mX4a2snu3VmA",
   authDomain: "extended-legend-415308.firebaseapp.com",
   projectId: "extended-legend-415308",
   storageBucket: "extended-legend-415308.appspot.com",
   messagingSenderId: "769368000323",
   appId: "1:769368000323:web:186f4630f1d4118f6cd1f6",
   measurementId: "G-FMMPHYKG3Y"
 };

 const app = initializeApp(firebaseConfig);
 const analytics = getAnalytics(app);
 const auth = getAuth(app);
 export{
    auth,
    createUserWithEmailAndPassword}