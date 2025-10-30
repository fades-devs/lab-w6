const express = require('express');
const app = express();
const port = 3001;  

const videos = [
  { id: 1, title: 'Introduction to Docker' },
  { id: 2, title: 'Microservices with Node.js' }
];  
 
app.get('/videos', (req, res) => {
  res.json(videos);
});  

app.listen(port, '0.0.0.0', () => {
  console.log(`Video Service running on port ${port}`);
});
