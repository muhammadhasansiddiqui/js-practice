import { auth,
     googleProvider,
      signInWithPopup ,
      GoogleAuthProvider,
      RecaptchaVerifier,
      signInWithPhoneNumber  } from "./firebase.js";


// google

const googleBtn = document.getElementById("googleBtn");

const loginWithGoogle = () => {
  signInWithPopup(auth, googleProvider)
    .then((result) => {
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential.accessToken;
      console.log("🚀 ~ .then ~ token:", token);
      const user = result.user;
      alert("User signed in: ", user);
      // Further processing can be done here, e.g., redirecting to another page
    })
    .catch((error) => {
      alert.error("Error signing in with Google: ", error ,credential,);
    });
};
// googleBtn.addEventListener("click", loginWithGoogle);



// phone Num


// Initialize the RecaptchaVerifier and render the reCAPTCHA widget.
window.recaptchaVerifier = new RecaptchaVerifier('recaptcha-container', {
  'size': 'normal',
  'callback': (response) => {
    // reCAPTCHA solved, allow sendOtp to be called.
  },
  'expired-callback': () => {
    // Response expired. Ask user to solve reCAPTCHA again.
  }
}, auth);

const sendOtp = () => {

  let phoneBtn = document.getElementById("phoneBtn");

  const phone = document.getElementById("phone").value;
  const appVerifier = window.recaptchaVerifier;

console.log("🚀 ~ sendOtp ~ `+${phone}`:", `+${phone}`);
  signInWithPhoneNumber(auth, `+${phone}`, appVerifier)
    .then((confirmationResult) => {
      console.log("🚀 ~ .then ~ confirmationResult:", confirmationResult);
      window.confirmationResult = confirmationResult;
      alert("OTP sent your phone number");
         window.location.href = "verify.html";

    //   window.location.href = "verify.html"; // Redirect to verify page after sending OTP
    })
    .catch((error) => {
        alert( error ,);
      console.log("🚀 ~ .then ~ error:", error);
    });
};
phoneBtn.addEventListener("click", sendOtp);





let verify = () =>{
alert(" tum verify ma ho ");
let otp = document.getElementById("otp");

    confirmationResult.confirm(otp.value).then((result) => {
        const user = result.user;
        console.log("🚀 ~ confirmationResult.confirm ~ result:", result);
        
      // User signed in successfully.
      // ...
    }).catch((error) => {
      console.log("🚀 ~ confirmationResult.confirm ~ error:", error);
      // User couldn't sign in (bad verification code?)
      // ...
    });
}

let verifyBtn = document.getElementById("verifyBtn");
verifyBtn.addEventListener("click" , verify)







// // Sign Up
// const signupForm = document.getElementById("signupForm");
// signupForm.addEventListener("submit", (e) => {
//   e.preventDefault();
//   const email = document.getElementById("signupEmail").value;
//   const password = document.getElementById("signupPassword").value;

//   createUserWithEmailAndPassword(auth, email, password)
//     .then((userCredential) => {
//       // Signed up successfully
//       alert("Sign up successful!");
//       window.location.href = "login.html"; // Redirect to login page
//     })
//     .catch((error) => {
//       alert(`Error: ${error.message}`);
//     });
// });

// // Log In
// const loginForm = document.getElementById("loginForm");
// loginForm.addEventListener("submit", (e) => {
//   e.preventDefault();
//   const email = document.getElementById("loginEmail").value;
//   const password = document.getElementById("loginPassword").value;

//   signInWithEmailAndPassword(auth, email, password)
//     .then((userCredential) => {
//       // Logged in successfully
//       alert("Login successful!");
//       window.location.href = "home.html"; // Redirect to home page
//     })
//     .catch((error) => {
//       alert(`Error: ${error.message}`);
//     });
// });

// // Phone Number Signup and OTP Verification
// const phoneSignupForm = document.getElementById("phoneSignupForm");
// phoneSignupForm.addEventListener("submit", (e) => {
//   e.preventDefault();
//   const phoneNumber = document.getElementById("phoneNumber").value;
//   const appVerifier = new RecaptchaVerifier(
//     "recaptcha-container",
//     {
//       size: "invisible",
//       callback: (response) => {
//         sendOTP();
//       },
//     },
//     auth
//   );

//   signInWithPhoneNumber(auth, phoneNumber, appVerifier)
//     .then((confirmationResult) => {
//       // SMS sent. Prompt user to type the code from the message
//       window.confirmationResult = confirmationResult;
//       alert("OTP sent!");
//       window.location.href = `verify.html?phone=${phoneNumber}`;
//     })
//     .catch((error) => {
//       alert(`Error: ${error.message}`);
//     });
// });

// function verifyOTP() {
//   const code = Array.from(document.querySelectorAll(".otp-group input"))
//     .map((input) => input.value)
//     .join("");
//   confirmationResult
//     .confirm(code)
//     .then((result) => {
//       // User signed in successfully
//       alert("Phone authentication successful!");
//       window.location.href = "home.html"; // Redirect to home page
//     })
//     .catch((error) => {
//       alert(`Error: ${error.message}`);
//     });
// }

// function resendOTP() {
//   const phoneNumber = new URLSearchParams(window.location.search).get("phone");
//   const appVerifier = new RecaptchaVerifier(
//     "recaptcha-container",
//     {
//       size: "invisible",
//       callback: (response) => {
//         sendOTP();
//       },
//     },
//     auth
//   );

//   signInWithPhoneNumber(auth, phoneNumber, appVerifier)
//     .then((confirmationResult) => {
//       window.confirmationResult = confirmationResult;
//       alert("OTP resent!");
//     })
//     .catch((error) => {
//       alert(`Error: ${error.message}`);
//     });
// }

// export { verifyOTP, resendOTP };
