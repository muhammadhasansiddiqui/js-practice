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
  sendEmailVerification 
} from "./firebase.js";

// Auth state observer
onAuthStateChanged(auth, (user) => {
  if (user) {
    console.log("User is signed in:", user.email || user.phoneNumber);
    if (location.pathname !== "/user.html") {
      location.href = "user.html";
    }
  } else {
    console.log("User is signed out");
    if (location.pathname !== "/index.html" && 
      location.pathname !== "/signup.html"&&
      location.pathname !== "/phone_signup.html"
    ) {
      location.href = "index.html";
    }
  }
});

// fbBtn
let fbBtn = document.getElementById("fbBtn");

let fbFOO = () => {
  Swal.fire('Coming Soon!');
}

fbBtn && fbBtn.addEventListener("click", fbFOO);

// Google Sign-In
const handleGoogleSignIn = async () => {
  const provider = new GoogleAuthProvider();
  try {
    const result = await signInWithPopup(auth, provider);
    Swal.fire('User signed in!', `Welcome, ${result.user.displayName}!`, 'success');
    window.location.href = "user.html";
  } catch (error) {
    Swal.fire('Error signing in with Google', error.message, 'error');
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
        Swal.fire('Error', 'Response expired. Please solve reCAPTCHA again.', 'error');
      },
    },
    auth
  );
}

// Function to send OTP
const sendOtp = () => {
  const phone = document.getElementById("phone").value.trim();
  const appVerifier = window.recaptchaVerifier;

  const phoneNumberPattern = /^[3][0-9]{9}$/; // 3 followed by 9 digits

  if (!phoneNumberPattern.test(phone)) {
    Swal.fire('Invalid phone number', 'Please enter a valid Pakistani phone number without starting "0" and starting with "3".', 'error');
    return;
  }

  console.log("🚀 Sending OTP to:", `+92${phone}`);
  signInWithPhoneNumber(auth, `+92${phone}`, appVerifier)
    .then((confirmationResult) => {
      window.confirmationResult = confirmationResult;
      Swal.fire('OTP sent successfully!', '', 'success');
      console.log("Confirmation Result:", confirmationResult);
    })
    .catch((error) => {
      Swal.fire('Error sending OTP', error.message, 'error');
      console.error("Error:", error);
    });
};

// Add event listener 
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
          Swal.fire('User signed in successfully!', '', 'success');
          window.location.href = "user.html";
        } catch (error) {
          Swal.fire('Error verifying OTP', error.message, 'error');
          console.error("Error verifying OTP:", error);
        }
      } else {
        Swal.fire('No OTP request has been made.', '', 'warning');
      }
    } else {
      Swal.fire('Please enter all six digits of the OTP.', '', 'warning');
    }
  });
}

// Sign-out
const handleSignOut = async () => {
  try {
    await signOut(auth);
    Swal.fire('You have been signed out.', '', 'success');
    window.location.href = "index.html";
  } catch (error) {
    Swal.fire('Error signing out', error.message, 'error');
    console.error("Error signing out:", error);
  }
};

const signoutBtn = document.getElementById("signoutBtn");
signoutBtn && signoutBtn.addEventListener("click", handleSignOut);

// Email/Password Login
const handleEmailPasswordLogin = async () => {
  const email = document.getElementById("loginEmail").value;
  const password = document.getElementById("loginPassword").value;

  if (!email || !password) {
    Swal.fire('Error', 'Please enter both email and password.', 'error');
    return;
  }

  try {
    await signInWithEmailAndPassword(auth, email, password);
    Swal.fire('Login successful!', '', 'success');
    window.location.href = "user.html";
  } catch (error) {
    Swal.fire('Error', error.message, 'error');
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
    Swal.fire('Signup successful!', '', 'success');
    console.log("User signed up successfully:", userCredential);
    window.location.href = "user.html";
  } catch (error) {
    Swal.fire('Error', error.message, 'error');
    console.error("Signup error:", error);
  }
};

const signupBtn = document.getElementById("signupBtn");
signupBtn && signupBtn.addEventListener("click", handleEmailPasswordSignup);


