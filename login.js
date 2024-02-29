function addUser() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    var user = {
      username: username,
      password: password
    };

    localStorage.setItem("curUser", username);

    displayCurUser();
    location.reload();
  }

function displayCurUser() {
  var username = localStorage.getItem("curUser");
  var displayedName = document.getElementById("displayedName");
  displayedName.innerHTML += username;
}