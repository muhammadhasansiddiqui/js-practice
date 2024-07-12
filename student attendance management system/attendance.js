const students = [];

// Function to display students in the table
function displayStudents() {
    const tableBody = document.getElementById('studentTable').getElementsByTagName('tbody')[0];
    tableBody.innerHTML = ''; // Clear existing rows

    students.forEach(student => {
        const row = tableBody.insertRow();

        const nameCell = row.insertCell(0);
        const rollNumberCell = row.insertCell(1);
        const dateCell = row.insertCell(2);
        const statusCell = row.insertCell(3);

        nameCell.textContent = student.name;
        rollNumberCell.textContent = student.rollNumber;
        dateCell.textContent = student.date;
        statusCell.textContent = student.isPresent;
    });
}

// Function to add a new student
function addStudent(event) {
    event.preventDefault(); // Prevent form submission

    const name = document.getElementById('name').value;
    const rollNumber = parseInt(document.getElementById('rollNumber').value, 10);
    const status = document.getElementById('status').value;

    const student = {
        name,
        rollNumber,
        date: new Date().toLocaleString(),
        isPresent: status === 'present' ? 'aya hai' : 'nahi aya'
    };

    students.push(student);
    displayStudents();

    // Clear the form
    document.getElementById('studentForm').reset();
}

// Function to handle file upload
function handleFile(event) {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.onload = function(e) {
        const data = new Uint8Array(e.target.result);
        const workbook = XLSX.read(data, { type: 'array' });
        const sheetName = workbook.SheetNames[0];
        const worksheet = workbook.Sheets[sheetName];
        const jsonData = XLSX.utils.sheet_to_json(worksheet);

        jsonData.forEach(row => {
            const student = {
                name: row.Name,
                rollNumber: parseInt(row.RollNumber, 10),
                date: new Date().toLocaleString(),
                isPresent: row.Status === 'present' ? 'aya hai' : 'nahi aya'
            };
            students.push(student);
        });

        displayStudents();
    };
    reader.readAsArrayBuffer(file);
}

// Event listener for form submission
document.getElementById('studentForm').addEventListener('submit', addStudent);

// Event listener for file input
document.getElementById('fileInput').addEventListener('change', handleFile);

// Initial call to display students
displayStudents();
























// // Student Attendance Management System

// const studentName = prompt("Enter your name");

// // Parse the input string as a base 10 (decimal) number
// const studentRoll = parseInt(prompt("Enter your roll number"), 10);

// const studentStatus = prompt("Enter your status (present/absent)");
// const studentDate = new Date();

// const formattedDate = studentDate.toLocaleString();

// let studentPresent = false;
// if (studentStatus.toLowerCase() === "present") {
//     studentPresent = "aya hai";
// } else {
//     studentPresent = "nahi aya";
// }

// const student = {
//     name: studentName,
//     rollNumber: studentRoll,
//     date: formattedDate,
//     isPresent: studentPresent
// };

// const students = [];
// students.push(student);

// const attendance = [];
// attendance.push(students);

// const displayedStudent = attendance[0][0];

// document.write(`Name: ${displayedStudent.name}<br>`);
// document.write(`Roll Number: ${displayedStudent.rollNumber}<br>`);
// document.write(`Date & Time: ${displayedStudent.date}<br>`);
// document.write(`Status: ${displayedStudent.isPresent}<br>`);












// let rollNUM = parseInt(prompt("Enter your roll number"), 10);

// let student = {
//     name: "John Doe",
//     rollNumber: rollNUM,
//     date: new Date(),
//     isPresent: false
// };

// if (rollNUM === 1) {
//     student.isPresent = true;
// }

// let students = [];
// students.push(student);

// let attendance = [];
// attendance.push(students);

// // Access the student object correctly and display the details
// let displayedStudent = attendance[0][0];

// document.write(`Name: ${displayedStudent.name}<br>`);
// document.write(`Roll Number: ${displayedStudent.rollNumber}<br>`);
// document.write(`Date: ${displayedStudent.date}<br>`);
// document.write(`Is Present: ${displayedStudent.isPresent}<br>`);

