function addUser() {
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;

    var user = {
      username: username,
      password: password
    };

    Database.users.push(user);
    localStorage.setItem('users', JSON.stringify(Database.users))
    localStorage.setItem('curUser', username)

    displayUser()
  }

function displayUser() {
  var username = localStorage.getItem('curUser')
  var displayedName = document.getElementById("displayedName")
  displayedName.innerHTML = username
}