const express = require('express');
const app = express();

app.get('/users', (req, res) => {
  const users = [
    { id: 1, name: 'abc4200' },
    { id: 2, name: 'def4200' },
    { id: 3, name: 'ghi4200' },
  ];

  // Send the users array as JSON response
  res.json(users);
});

const PORT = 4200; // Ensure this port matches the Nginx proxy_pass setting
app.listen(PORT, '0.0.0.0', () => {
  console.log(`Server running on port 4200`);
});
