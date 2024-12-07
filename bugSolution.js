const express = require('express');
const app = express();
app.get('/users/:id', (req, res) => {
  const userId = req.params.id;
  let parsedUserId;
  // Check if userId can be parsed as an integer
  if(isNaN(parseInt(userId))){
    return res.status(400).send('Invalid user ID');
  } else {
    parsedUserId = parseInt(userId);
  }
  const user = users.find(user => user.id === parsedUserId);
  if (!user) {
    return res.status(404).send('User not found');
  }
  res.send(user);
});