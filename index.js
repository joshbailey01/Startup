const express = require('express');
const app = express();

// The service port. In production the front-end code is statically hosted by the service on the same port.
const port = process.argv.length > 2 ? process.argv[2] : 3000;

// JSON body parsing using built-in middleware
app.use(express.json());

// Serve up the front-end static content hosting
app.use(express.static('public'));

// Router for service endpoints
var apiRouter = express.Router();
app.use(`/api`, apiRouter);

//Post event
let events = []
apiRouter.post('/post', (req, res) =>{
    events.push(req.body)
    res.send(events)
})

//Get posts
apiRouter.get('/events', (req, res) =>{
    res.send(events)
})

// Return the application's default page if the path is unknown
app.use((_req, res) => {
    res.sendFile('index.html', { root: 'public' });
  });
  
app.listen(port, () => {
console.log(`Listening on port ${port}`);
});