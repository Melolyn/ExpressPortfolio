// Lynn Zein - 301280312

const express = require('express'); 
const app = express();
const path = require('path');
const PORT = process.env.PORT || 5000;
const router = express.Router();
const serverless = require('serverless-http');

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname, 'public')));


app.get('/', (req, res) => {
  res.render('HomePage'); 
});


app.get('/projects', (req, res) => {
  res.render('projects');
});

app.get('/contactme', (req, res) => {
  res.render('contactme');
});

app.get('/aboutme', (req, res) => {
  res.render('aboutme');
});

app.get('/services', (req, res) => {
  res.render('services');
});


// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

app.use('/.netlify/functions/app', router); // Prefix for serverless function routes

// Export the app as a serverless function
module.exports.handler = serverless(app);