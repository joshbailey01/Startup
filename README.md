
### Pitch
    After interviewing university strudents across several campuses we found that the majority feel 
    like they don't always know whats happening in the social scene. Turnt solves this problem. 
    It is a wesbsite/app where people post, share, and save local parties. It alows people to see events 
    happening near their area, can generate more business for DJ's and small pop up shops, and 
    eliminates FOMO on college campuses.

### Features
    Secure login
    Search algorithm
    Share button that copies a link
    Save button that saves a post to your collection

### Technologies
    **Authentication** - option to create an account adds user to database, login generates authtoken, username is displayed after login.
    **Database** - stores users and user data (hashes of saved posts), stores posts
    **Websocket data** - Notification center, notifications are sent to owner of post when their post is saved.

### Sketch    
![Startup Sketch](https://github.com/joshbailey01/Startup/assets/144954020/ad074e57-7f76-4654-b1d0-5c5eb538af7e)

### CSS
    Added style.css file and added css code to design the layout of the webpage.
    Interactive nav bar
    Login input boxes and button

### JavaScript
    JavaScript support for future login
    view longer description:
    Added login.js to save inputs from login boxes to local storage, as weel as display the username input on the webpage

    JavaScript support for future database data
    view longer description:
    Added dataBase.js to create objects to be JSONified into a database
    Added createPost.js to save post data to a database object

    JavaScript support for future WebSocket
    view longer description
    Added notifications.js for future websocket integration that will allow client server communication for notifications

    JavaScript support for your application's interaction logic
    Added userInteractions.js for webpoage interaction, interactive buttons, functions for liking and sharing posts


