    // Function to initialize WebSocket connection
    function initWebSocket() {
        // Replace 'ws://example.com' with the actual WebSocket server URL
        const socket = new WebSocket('ws://example.com');
  
        // Connection opened
        socket.addEventListener('open', (event) => {
          console.log('WebSocket connection opened:', event);
        });
  
        // Listen for messages from the server
        socket.addEventListener('message', (event) => {
          console.log('Message from server:', event.data);
          displayNotification(event.data);
        });
  
        // Connection closed
        socket.addEventListener('close', (event) => {
          console.log('WebSocket connection closed:', event);
        });
  
        // Connection error
        socket.addEventListener('error', (error) => {
          console.error('WebSocket error:', error);
        });
  
        return socket;
      }
  
      // Function to display notifications in the browser
      function displayNotification(message) {
        const notificationsDiv = document.getElementById('notifications');
        const notificationElement = document.createElement('div');
        notificationElement.classList.add('notification');
        notificationElement.textContent = message;
        notificationsDiv.appendChild(notificationElement);
      }
  
      // Simulate receiving notifications from the server
      function simulateServerNotifications() {
        const messagesFromServer = [
          '\"User\" saved your event!'
        ];
  
        setInterval(() => {
          const randomMessage = messagesFromServer[Math.floor(Math.random() * messagesFromServer.length)];
          displayNotification(randomMessage);
        }, 5000); // Simulate a new notification every 5 seconds
      }

      function sendLike() {
        const message = 'JSON String with User and post data'; // Replace with your actual message
        if (socket.readyState === WebSocket.OPEN) {
          socket.send(message);
          console.log('Message sent to server:', message);
        } else {
          console.error('WebSocket is not open.');
        }
      }
  
      // Initialize WebSocket connection
      const socket = initWebSocket();
  
      // Simulate receiving notifications from the server (for demonstration purposes)
      simulateServerNotifications();
