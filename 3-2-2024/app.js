// Using prompt to ask for user input
let name = prompt("Please enter your name:");

// Displaying a message using the entered name
if (name !== null && name !== "") {
    alert("Hello, " + name + "! Welcome to our website.");
} else {
    alert("Hello, guest! Welcome to our website.");
}