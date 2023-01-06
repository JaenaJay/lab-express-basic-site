const express = require('express');
const app =express();

// Make everything inside of public/ available
app.use(express.static('public'));

// our first Route
app.get('/home', (request, response, next) => response.sendFile(__dirname + '/views/home.html'));
  

app.get('/about', (request, response, next) =>  response.sendFile(__dirname + '/views/about.html'));
  
app.get('/gallery', (request, response, next) => response.sendFile(__dirname + '/views/gallery.html'));
    

app.get('/works', (request, response, next) => response.sendFile(__dirname + '/views/photo-works.html'));


  // ... the previously added code
// Server Started
app.listen(3000, () => console.log('My first app listening on port 3000! '));

