function postEvent() {
    var postImage = document.getElementById("postImage").value;
    var eventLocation = document.getElementById("eventLocation").value;
    var eventDate = document.getElementById("eventDate").value;
    var eventDescription = document.getElementById("eventDescription").value;

    var loggedInUser = getCurrentUser();
    if (loggedInUser) {
      var eventData = {
        user: loggedInUser,
        image: postImage,
        location: eventLocation,
        date: eventDate,
        description: eventDescription,
      };

      Database.events.push(eventData);
      localStorage.setItem('posts', JSON.stringify(Database.events))

      console.log('Event Posted:', eventData);
    } else {
      console.log('User not logged in. Please log in first.');
    }
  }

  function getCurrentUser() {
    var username = document.getElementById('username').value;
    return Database.users[username];
  }

function displayCurUser() {
  var username = localStorage.getItem("curUser");
  var displayedName = document.getElementById("displayedName");
  displayedName.innerHTML += username;
}

displayCurUser()