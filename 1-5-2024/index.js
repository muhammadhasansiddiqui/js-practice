// // Events: fields

// // Reading field values


// var userCustomise = ["hasan","zee","mesum","uzair"];
// var users         = ["hasan","zee","mesum","uzair"]


// function handleSearch(params) {
//     var searchedValue = params.target.value;
//     var filteredUsers = users.filter(function(user){
//         return user.includes(searchedValue);
//     });
//     userCustomise = filteredUsers;

let users = [
    { title: "Ali", phone: "+1234567890" },
    { title: "Ahmed", phone: "+9876543210" },
    { title: "Hasan", phone: "+1234567891" },
    { title: "Zee", phone: "+9876543211" },
    { title: "uzair", phone: "+1234567892" }
  ];

  function handleSearch() {
    const searchTerm = document.getElementById("search-bar").value.toLowerCase();
    const filteredUsers = users.filter(user => {
      return user.title.toLowerCase().includes(searchTerm) || user.phone.toLowerCase().includes(searchTerm);
    });

    displayUsers(filteredUsers);
  }

  function deleteUser(index) {
    users.splice(index, 1); // Remove the user from the array
    handleSearch(); // Re-display the users after deletion
  }

  function displayUsers(users) {
    const userList = document.getElementById("user-list");
    userList.innerHTML = "";
    if (users.length === 0) {
      const noResults = document.createElement("p");
      noResults.innerHTML = "No results found.";
      userList.appendChild(noResults);
      return;
    }

    users.forEach((user, index) => {
      const userItem = document.createElement("li");
      userItem.innerHTML = `
        <h3>${user.title}</h3>
        <p>${user.phone}</p>
        <button onclick="deleteUser(${index})">Delete</button>
      `;
      userList.appendChild(userItem);
    });
  }

  function addUser() {
    const nameInput = document.getElementById("name-input").value;
    const phoneInput = document.getElementById("phone-input").value;
    if (nameInput && phoneInput) {
      users.push({ title: nameInput, phone: phoneInput });
      handleSearch(); // Re-display the users after addition
      // Clear input fields
      document.getElementById("name-input").value = "";
      document.getElementById("phone-input").value = "";
    } else {
      alert("Please enter both name and phone number.");
    }
  }