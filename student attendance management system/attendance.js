const add = () => {
  const newSTUname = document.getElementById("newSTUname").value.trim();
  const NEWidnum = parseInt(document.getElementById("NEWidnum").value.trim()); // Parse ID as integer
  let studentData = JSON.parse(localStorage.getItem("studentData") || "{}");

  if (!newSTUname || !NEWidnum) {
    Swal.fire({
      icon: 'warning',
      title: 'Warning',
      html: '<span class="swal-custom-text">Please enter both student name and student ID number.</span>',
      customClass: {
        htmlContainer: 'swal-custom-html',
      }
    });
    return;
  }

  if (studentData[NEWidnum]) {
    Swal.fire({
      icon: 'error',
      title: 'Error',
      html: '<span class="swal-custom-text">A student with this ID already exists.</span>',
      customClass: {
        htmlContainer: 'swal-custom-html',
      }
    });
  } else {
    studentData[NEWidnum] = { name: newSTUname, attendance: [] };
    localStorage.setItem("studentData", JSON.stringify(studentData));
    Swal.fire({
      icon: 'success',
      title: 'Success',
      html: '<span class="swal-custom-text">Student added successfully!</span>',
      customClass: {
        htmlContainer: 'swal-custom-html',
      }
    });
  }

  // Clear input fields
  document.getElementById("newSTUname").value = "";
  document.getElementById("NEWidnum").value = "";
};

const enter = (event) => {
  console.log("Enter function called.");

  const idnum = parseInt(document.getElementById("idnum").value); // Parse ID as integer
  console.log("ID Number:", idnum);

  let studentData = JSON.parse(localStorage.getItem("studentData") || "{}");
  console.log("Student Data:", studentData);

  if (studentData[idnum]) {
    const attendance = studentData[idnum].attendance;
    const currentDate = new Date();
    const formattedDate = currentDate.toISOString().split('T')[0]; // Format date as YYYY-MM-DD
    const formattedTime = currentDate.toLocaleTimeString();

    const attendanceRecord = `${formattedDate} ${formattedTime}`;
    const attendanceDates = attendance.map(record => record.split(' ')[0]); // Extract dates from records

    if (attendanceDates.includes(formattedDate)) {
      Swal.fire({
        icon: 'warning',
        title: 'Warning',
        html: '<span class="swal-custom-text">Attendance already marked for today.</span>',
        customClass: {
          htmlContainer: 'swal-custom-html',
        }
      });
    } else {
      attendance.push(attendanceRecord);
      localStorage.setItem("studentData", JSON.stringify(studentData));
      Swal.fire({
        icon: 'success',
        title: 'Success',
        html: '<span class="swal-custom-text">Attendance marked successfully!</span>',
        customClass: {
          htmlContainer: 'swal-custom-html',
        }
      });
    }
  } else {
    Swal.fire({
      icon: 'error',
      title: 'Error',
      html: '<span class="swal-custom-text">No student found with this ID number.</span>',
      customClass: {
        htmlContainer: 'swal-custom-html',
      }
    });
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
    Swal.fire({
      icon: 'success',
      title: 'Success',
      html: '<span class="swal-custom-text">Attendance history loaded successfully!</span>',
      customClass: {
        htmlContainer: 'swal-custom-html',
      }
    });
  }
};

document.addEventListener("DOMContentLoaded", loadStudentDetails);

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
    studentTableBody.innerHTML =
      "<tr><td colspan='2'>No students found.</td></tr>";
  }
}

const handleFile = () => {
  const fileInput = document.getElementById("fileInput");
  const file = fileInput.files[0];

  if (!file) {
    Swal.fire({
      icon: 'warning',
      title: 'Warning',
      html: '<span class="swal-custom-text">Please select a file.</span>',
      customClass: {
        htmlContainer: 'swal-custom-html',
      }
    });
    return;
  }

  const reader = new FileReader();
  reader.onload = function (event) {
    const data = event.target.result;
    if (file.name.endsWith(".csv")) {
      processData(data);
      Swal.fire({
        icon: 'success',
        title: 'Success',
        html: '<span class="swal-custom-text">File uploaded successfully!</span>',
        customClass: {
          htmlContainer: 'swal-custom-html',
        }
      });
    } else if (file.name.endsWith(".xlsx") || file.name.endsWith(".xls")) {
      const dataArrayBuffer = new Uint8Array(event.target.result);
      const workbook = XLSX.read(dataArrayBuffer, { type: "array" });
      const sheetName = workbook.SheetNames[0];
      const sheet = workbook.Sheets[sheetName];
      const csvData = XLSX.utils.sheet_to_csv(sheet);
      processData(csvData);
      Swal.fire({
        icon: 'success',
        title: 'Success',
        html: '<span class="swal-custom-text">File uploaded successfully!</span>',
        customClass: {
          htmlContainer: 'swal-custom-html',
        }
      });
    } else {
      Swal.fire({
        icon: 'error',
        title: 'Error',
        html: '<span class="swal-custom-text">Unsupported file format. Please upload a CSV, XLSX, or XLS file.</span>',
        customClass: {
          htmlContainer: 'swal-custom-html',
        }
      });
    }
  };

  if (file.name.endsWith(".csv")) {
    reader.readAsText(file);
  } else if (file.name.endsWith(".xlsx") || file.name.endsWith(".xls")) {
    reader.readAsArrayBuffer(file);
  } else {
    Swal.fire({
      icon: 'error',
      title: 'Error',
      html: '<span class="swal-custom-text">Unsupported file format. Please upload a CSV, XLSX, or XLS file.</span>',
      customClass: {
        htmlContainer: 'swal-custom-html',
      }
    });
  }
};

const processData = (data) => {
  let students = [];
  const rows = data.split("\n");
  rows.forEach((row, index) => {
    if (index > 0 && row.trim() !== "") {
      // Skip header row and empty rows
      const columns = row.split(",");
      const student = {
        name: columns[0].trim(),
        id: parseInt(columns[1].trim(), 10),
      };
      if (student.name && !isNaN(student.id)) {
        // Validate data
        students.push(student);
      }
    }
  });

  if (students.length > 0) {
    addStudents(students);
    Swal.fire({
      icon: 'success',
      title: 'Success',
      html: '<span class="swal-custom-text">Students added successfully! Please refresh the page to see the updated list.</span>',
      customClass: {
        htmlContainer: 'swal-custom-html',
      }
    });
  } else {
    Swal.fire({
      icon: 'error',
      title: 'Error',
      html: '<span class="swal-custom-text">No valid student data found in the file.</span>',
      customClass: {
        htmlContainer: 'swal-custom-html',
      }
    });
  }
};

const addStudents = (students) => {
  let studentData = JSON.parse(localStorage.getItem("studentData") || "{}");
  students.forEach((student) => {
    const idnum = student.id;
    if (!studentData[idnum]) {
      studentData[idnum] = { name: student.name, attendance: [] };
    }
  });
  localStorage.setItem("studentData", JSON.stringify(studentData));
  Swal.fire({
    icon: 'success',
    title: 'Success',
    html: '<span class="swal-custom-text">Students added successfully!</span>',
    customClass: {
      htmlContainer: 'swal-custom-html',
    }
  });
};
