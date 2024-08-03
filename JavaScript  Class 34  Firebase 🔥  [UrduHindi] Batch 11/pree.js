import {
    auth,
    GoogleAuthProvider,
    signInWithPopup,
    RecaptchaVerifier,
    signInWithPhoneNumber,
    onAuthStateChanged,
    signOut,
    signInWithEmailAndPassword,
    createUserWithEmailAndPassword,
  } from "./firebase.js";


  onAuthStateChanged(auth, (user) => {
    if (user) {
      console.log("User exists:", user);
    } else {
      console.log("No user found.");
    }
  });


// Signed up 
let signupFoo = () => {
  let email = document.getElementById("signupEmail").value;
  let password = document.getElementById("signupPassword").value;
  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const user = userCredential.user;
      alert("User Signed Up Successfully");
      console.log("User:", user);
    })
    .catch((error) => {
      alert(error.message);
      console.error("Error Code:", error.code, "Error Message:", error.message);
    });
};

let signupBtn = document.getElementById("signupBtn");
signupBtn && signupBtn.addEventListener("click", signupFoo);



  // sign in
  let signINFoo = () => {
    let email = document.getElementById("loginEmail").value;
    let password = document.getElementById("loginPassword").value;
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        alert("User Signed In Successfully");
        console.log("User:", user);
      })
      .catch((error) => {
        alert("Failed to sign in");
        console.error("Error Code:", error.code, "Error Message:", error.message);
      });
  };
  
  let loginBtn = document.getElementById("loginBtn"); 
  loginBtn && loginBtn.addEventListener("click", signINFoo);