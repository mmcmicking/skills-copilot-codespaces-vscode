// Create web server
const express = require('express');
const app = express();
const port = 3000;

// Create a comment
app.post('/comments', (req, res) => {
  res.send('Create a comment');
});

// Read a comment
app.get('/comments/:id', (req, res) => {
  res.send('Read a comment');
});

// Update a comment
app.put('/comments/:id', (req, res) => {
  res.send('Update a comment');
});

// Delete a comment
app.delete('/comments/:id', (req, res) => {
  res.send('Delete a comment');
});

app.listen(port, () => {
  console.log(`Comments service listening at http://localhost:${port}`);
});
 
 2. Create a docker-compose.yml file 
 Create a  docker-compose.yml  file in the root directory of your project. 
 version: '3.8'

services:
  comments:
    build: ./comments
    ports:
      - "3000:3000"
  posts:
    build: ./posts
    ports:
      - "3001:3001"
  query:
    build: ./query
    ports:
      - "3002:3002"
 
 3. Create a Dockerfile for each service 
 Create a  Dockerfile  for each service in the respective directories.