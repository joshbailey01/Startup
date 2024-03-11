function addUser(event) {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    // var user = {
    //   username: username,
    //   password: password
    // };

    localStorage.setItem("curUser", username);

    displayCurUser();
    console.log(window.location.href)
    event.preventDefault();
    window.location.href = "home.html";
    console.log(window.location.href);
  }

function displayCurUser() {
  var username = localStorage.getItem("curUser");
  var displayedName = document.getElementById("displayedName");
  displayedName.innerHTML += username;
}