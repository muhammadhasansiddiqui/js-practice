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

// Auth state observer
onAuthStateChanged(auth, (user) => {
  if (user) {
    console.log("User is signed in:", user);
    // Additional user info can be accessed here if needed
  } else {
    console.log("User is signed out");
    // Handle the signed-out state
  }
});



// fbBtn
let fbBtn = document.getElementById("fbBtn");

let fbFOO = ()=>{
  alert("Comeing Soon")
}

fbBtn && fbBtn.addEventListener("click",fbFOO)



// Google Sign-In
const handleGoogleSignIn = async () => {
  const provider = new GoogleAuthProvider();
  try {
    const result = await signInWithPopup(auth, provider);
    alert("User signed in: " + result.user.displayName);
    window.location.href = "user.html";
  } catch (error) {
    alert("Error signing in with Google: " + error.message);
    console.error("Error signing in with Google:", error);
  }
};

const googleBtn = document.getElementById("googleBtn");

 googleBtn && googleBtn.addEventListener("click", handleGoogleSignIn);


// Phone Authentication
if (document.getElementById("recaptcha-container")) {
  window.recaptchaVerifier = new RecaptchaVerifier(
    "recaptcha-container",
    {
      size: "normal",
      callback: () => {
        console.log("reCAPTCHA verified");
      },
      "expired-callback": () => {
        alert("Response expired. Please solve reCAPTCHA again.");
      },
    },
    auth
  );
}

// Function to send OTP
const sendOtp = () => {
  const phone = document.getElementById("phone").value.trim();
  const appVerifier = window.recaptchaVerifier;

  // Ensure phone number starts with '+'
  // if (!phone.startsWith("+")) {
  //   alert("Please include the country code with a + sign.");
  //   return;
  // }

  console.log("Sending OTP to:", phone);
  console.log("🚀 ~ sendOtp ~ `$+{phone}`:", `$+{phone}`);

  signInWithPhoneNumber(auth, `+${phone}`, appVerifier)
    .then((confirmationResult) => {
      window.confirmationResult = confirmationResult;
      alert("OTP sent successfully!");
      console.log("Confirmation Result:", confirmationResult);
    })
    .catch((error) => {
      alert("Error sending OTP: " + error.message);
      console.error("Error:", error);
    });
};

const phoneBtn = document.getElementById("phoneBtn");
phoneBtn && phoneBtn.addEventListener("click", sendOtp);


// Verify OTP
const verifyBtn = document.getElementById("verifyBtn");
if (verifyBtn) {
  verifyBtn.addEventListener("click", async () => {
    const otp = Array.from(
      { length: 6 },
      (_, i) => document.getElementById(`otp${i + 1}`).value
    ).join("");

    if (otp.length === 6) {
      if (window.confirmationResult) {
        try {
          const result = await window.confirmationResult.confirm(otp);
          alert("User signed in successfully!");
          window.location.href = "user.html";
        } catch (error) {
          alert("Error verifying OTP: " + error.message);
          console.error("Error verifying OTP:", error);
        }
      } else {
        alert("No OTP request has been made.");
      }
    } else {
      alert("Please enter all six digits of the OTP.");
    }
  });
}

// Sign-out
const handleSignOut = async () => {
  try {
    await signOut(auth);
    alert("You have been signed out.");
    window.location.href = "login.html";
  } catch (error) {
    alert("Error signing out: " + error.message);
    console.error("Error signing out:", error);
  }
};

const signoutBtn = document.getElementById("signoutBtn");

signoutBtn && signoutBtn.addEventListener("click", handleSignOut);


// Email/Password Login
const handleEmailPasswordLogin = async () => {
  const email = document.getElementById("loginEmail").value;
  const password = document.getElementById("loginPassword").value;

  try {
    await signInWithEmailAndPassword(auth, email, password);
    alert("Login successful!");
    window.location.href = "user.html";
  } catch (error) {
    alert(`Error: ${error.message}`);
    console.error("Login error:", error);
  }
};

const loginBtn = document.getElementById("loginBtn");

loginBtn && loginBtn.addEventListener("click", handleEmailPasswordLogin);


// Email/Password Sign-Up

const handleEmailPasswordSignup = async (event) => {
  event.preventDefault(); // Prevent form from submitting
  const email = document.getElementById("signupEmail").value;
  const password = document.getElementById("signupPassword").value;

  try {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    alert("Signup successful!");
    console.log("User signed up successfully:", userCredential);
    window.location.href = "user.html";
  } catch (error) {
    alert(`Error: ${error.message}`);
    console.error("Signup error:", error);
  }
};

const signupBtn = document.getElementById("signupBtn");

signupBtn && signupBtn.addEventListener("click", handleEmailPasswordSignup);




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
// }}

//
//
//
//
//
