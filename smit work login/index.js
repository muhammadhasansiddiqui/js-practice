
function checkUser() {
  var userEmail = localStorage.getItem("email");
  var userPsw = localStorage.getItem("password");
  console.log(userEmail, "userEmail");
  if (userEmail !== null && userPsw !== null) {
    window.location.pathname = "home.html";
  } else {
    console.log(window.location.pathname);
    if (window.location.pathname !== "/index.html") {
      window.location.pathname = "index.html";
    }
  }
}

function logoutHandle() {
  localStorage.removeItem("email");
  localStorage.removeItem("password");
  alert("User logout successful");
  window.location.pathname = "index.html";
}

function loginHandler() {
  var emailInput = document.getElementById("emil");
  var pswInput = document.getElementById("psw");

  if (emailInput.value !== "" && pswInput.value !== "") {
    localStorage.setItem("email", emailInput.value);
    localStorage.setItem("password", pswInput.value);
    alert("login successful");
    window.location.pathname = "home.html";
  } else {
    alert("Email and password empty");
  }
}