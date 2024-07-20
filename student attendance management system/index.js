window.addEventListener('load', function() {
    setTimeout(function() {
      document.getElementById('loader').style.display = 'none';
      document.getElementById('content').style.display = 'flex';
    }, 2000);
  });

  function login() {
    if (document.getElementById("username").value == "admin" && document.getElementById("password").value == "admin") {
      window.location.href = "addStudent.html";
    } else {
      Swal.fire({
        icon: 'warning',
        title: 'Warning',
        html: '<span class="swal-custom-text">Wrong username or password.</span>',
        customClass: {
          htmlContainer: 'swal-custom-html',
        }
      });
    }
  }