// Create web server with express
const express = require('express');
const app = express();
const port = 3000;

// Create a route that will handle comments
app.get('/comments', (req, res) => {
  res.send('Comments will go here');
});

// Start the server
app.listen(port, () => {
  console.log(`Server started at http://localhost:${port}`);
});





