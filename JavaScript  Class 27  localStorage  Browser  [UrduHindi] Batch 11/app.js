function getuser() {
  var users = localStorage.getItem("users");
  if (users) {
    users = JSON.parse(users);
  } else {
    users = [];
  }
  return users;
}

function register() {
  var name = document.getElementById("r-name");
  var email = document.getElementById("r-email");
  var password = document.getElementById("r-password");
  var users = getuser();

  var user = {
    name: name.value,
    email: email.value,
    password: password.value,
  };
  if (name.value === "" || email.value === "" || password.value === "") {
    Swal.fire("Please fill all input");
    return;
  }
  users.push(user);
  localStorage.setItem("users", JSON.stringify(users));

  name.value = "";
  email.value = "";
  password.value = "";
 

  Swal.fire("User registered successfully");
  window.location.href = "index.html";


  console.log("🚀 ", 
    successfully = "User registered successfully" 
  );
}

function login() {
  var email = document.getElementById("l-email");
  var password = document.getElementById("l-password");
  var users = getuser();
  var saveUser = {};
  invaild = false;

  if (email.value === "" || password.value === "") {
    Swal.fire("Please fill all input");
    return;
  }
  for (let i = 0; i < users.length; i++) {
    if (
      email.value === users[i].email &&
      password.value === users[i].password
    ) {
      saveUser = users[i];
      invaild = true;

      break;
    }

  }

  if (invaild) {
    Swal.fire("User login successfully");
    window.location.href = "kanban.html";

    console.log("user login success");
  } else {
    Swal.fire("invalid email or password");

    console.log("invalid email or password");
  }
}

function logout(){
  console.log("logout");
  window.location.href = "index.html";}
