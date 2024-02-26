function login() {
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;

    var user = {
      username: username,
      password: password
    };

    localStorage.setItem("User", user);
    window.location.href = "home.html";
  }