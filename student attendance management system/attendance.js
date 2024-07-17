const add = () => {
  const newSTUname = document.getElementById("newSTUname").value.trim();
  const NEWidnum = parseInt(document.getElementById("NEWidnum").value.trim()); // Parse ID as integer
  let studentData = JSON.parse(localStorage.getItem("studentData") || "{}");

  if (!newSTUname || !NEWidnum ) {
    alert("Please enter both student name and student ID number.");
    return;
  }

  if (studentData[NEWidnum]) {
    alert("A student with this ID already exists.");
  } else {
    studentData[NEWidnum] = { name: newSTUname, attendance: [] };
    localStorage.setItem("studentData", JSON.stringify(studentData));
    alert("Student added successfully!");
  }

  // Clear input fields
  document.getElementById("newSTUname").value = "";
  document.getElementById("NEWidnum").value = "";
};

const enter = (event) => {
  // event.preventDefault();
  console.log("Enter function called."); // Check if function is called

  const idnum = parseInt(document.getElementById("idnum").value); // Parse ID as integer
  console.log("ID Number:", idnum); // Check if ID number is correctly parsed

  let studentData = JSON.parse(localStorage.getItem("studentData") || "{}");
  console.log("Student Data:", studentData); // Check if studentData is correctly retrieved

  if (studentData[idnum]) {
    const attendance = studentData[idnum].attendance;
    const currentDate = new Date();
    const formattedDate = currentDate.toLocaleDateString();
    const formattedTime = currentDate.toLocaleTimeString();

    const attendanceRecord = `${formattedDate} ${formattedTime}`;

    if (!attendance.includes(attendanceRecord)) {
      attendance.push(attendanceRecord);
      localStorage.setItem("studentData", JSON.stringify(studentData));
      alert("Attendance marked successfully!");
    } else {
      alert("Attendance already marked for today.");
    }
  } else {
    alert("No student found with this ID number.");
  }
  document.getElementById("idnum").value = ""; // Clear input field
};

const attendanceHIS = () => {
  const attendanceTableBody = document.querySelector("#attendanceTable tbody");
  console.log("🚀 ~ attendanceHIS ~ attendanceTableBody:", attendanceTableBody);

  attendanceTableBody.innerHTML = "";
  let studentData = JSON.parse(localStorage.getItem("studentData") || "{}");
  for (const idnum in studentData) {
    const student = studentData[idnum];
    student.attendance.forEach((record) => {
      const dateTime = new Date(record);
      const formattedDate = dateTime.toLocaleDateString();
      const formattedTime = dateTime.toLocaleTimeString();
      const row = document.createElement("tr");
      row.innerHTML = `<td>${student.name}</td><td>${idnum}</td><td>${formattedDate}</td><td>${formattedTime}</td>`;
      attendanceTableBody.appendChild(row);
    });
  }
  if (attendanceTableBody.innerHTML === "") {
    attendanceTableBody.innerHTML =
      "<tr><td colspan='4'>No attendance records found.</td></tr>";
  } else {
    alert("Attendance history loaded successfully!");
  }
};

// student det

document.addEventListener('DOMContentLoaded', loadStudentDetails);

    function loadStudentDetails() {
        const studentTableBody = document.querySelector("#studentTable tbody");
        studentTableBody.innerHTML = "";
        let studentData = JSON.parse(localStorage.getItem("studentData") || "{}");
        for (const idnum in studentData) {
            const student = studentData[idnum];
            const row = document.createElement("tr");
            row.innerHTML = `<td>${student.name}</td><td>${idnum}</td>`;
            studentTableBody.appendChild(row);
        }
        if (studentTableBody.innerHTML === "") {
            studentTableBody.innerHTML = "<tr><td colspan='2'>No students found.</td></tr>";
        }
    }


    // file
    const handleFile = () => {
      const fileInput = document.getElementById("fileInput");
      const file = fileInput.files[0];
    
      if (!file) {
        alert("Please select a file.");
        return;
      }
    
      const reader = new FileReader();
      reader.onload = function(event) {
        const data = event.target.result;
        if (file.name.endsWith(".csv")) {
          processData(data);
          alert("File uploaded successfully!");
        } else if (file.name.endsWith(".xlsx") || file.name.endsWith(".xls")) {
          const dataArrayBuffer = new Uint8Array(event.target.result);
          const workbook = XLSX.read(dataArrayBuffer, { type: "array" });
          const sheetName = workbook.SheetNames[0];
          const sheet = workbook.Sheets[sheetName];
          const csvData = XLSX.utils.sheet_to_csv(sheet);
          processData(csvData);
          alert("File uploaded successfully!");
        } else {
          alert("Unsupported file format. Please upload a CSV, XLSX, or XLS file.");
        }
      };
    
      if (file.name.endsWith(".csv")) {
        reader.readAsText(file);
        alert("File uploaded successfully!");
      } else if (file.name.endsWith(".xlsx") || file.name.endsWith(".xls")) {
        reader.readAsArrayBuffer(file);
        alert("File uploaded successfully!");
      } else {
        alert("Unsupported file format. Please upload a CSV, XLSX, or XLS file.");
      }
    };
    
    const processData = (data) => {
      let students = [];
      const rows = data.split("\n");
      rows.forEach((row, index) => {
        if (index > 0 && row.trim() !== "") {  // Skip header row and empty rows
          const columns = row.split(",");
          const student = {
            name: columns[0].trim(),
            id: parseInt(columns[1].trim(), 10)
          };
          if (student.name && !isNaN(student.id)) {  // Validate data
            students.push(student);
            alert("Student added successfully!");
          }
        }
      });
    
      if (students.length > 0) {
        addStudents(students)
        alert ("Students added successfully!Please refresh the page to see the updated list. ");
      } else {
        alert("No valid student data found in the file.");
      }
    };

    













      const addStudents = (students) => {
        let studentData = JSON.parse(localStorage.getItem("studentData") || "{}");
        students.forEach(student => {
          const idnum = student.id;
          if (!studentData[idnum]) {
            studentData[idnum] = { name: student.name, attendance: [] };
          }
        });
        localStorage.setItem("studentData", JSON.stringify(studentData));
        alert("Students added successfully!");
      };
      