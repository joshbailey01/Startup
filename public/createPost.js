async function postEvent() {
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

    //Service call to backend
    try{
      const response = await fetch('/api/post', {
        method: 'POST',
        headers: {'content-type': 'application/json'},
        body: JSON.stringify(eventData),
      });

      const posts = await response.json()
      localStorage.setItem('posts', JSON.stringify(posts))
    } catch {
      console.log('error')
    }
      
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