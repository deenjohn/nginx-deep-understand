const express = require('express');
const app = express();

app.get('/users', (req, res) => {
  const users = [
    { id: 1, name: 'abc5000' },
    { id: 2, name: 'def5000' },
    { id: 3, name: 'ghi5000' },
  ];

  // Send the users array as JSON response
  res.json(users);
});

const PORT = 5000; // Ensure this port matches the Nginx proxy_pass setting
app.listen(PORT, '0.0.0.0', () => {
  console.log(`Server running on port 5000`);
});
