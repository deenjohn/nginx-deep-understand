const express = require('express');
const app = express();

app.get('/', (req, res) => {

  res.send("Hello World");
});

app.get('/users', (req, res) => {
  const users = [
    { id: 1, name: 'John4000' },
    { id: 2, name: 'Jane4000' },
    { id: 3, name: 'Doe4000' },
  ];

  // Send the users array as JSON response
  res.json(users);
});

const PORT = 4000; // Ensure this port matches the Nginx proxy_pass setting
app.listen(PORT, '0.0.0.0', () => {
  console.log(`Server running on port 4000`);
});
