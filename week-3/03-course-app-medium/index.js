const express = require('express');
const app = express();
const fs = require('fs');


app.use(express.json());

const datauser=fs.readFileSync('users.json');
const dataadmin=fs.readFileSync('Admins.json');
const datacourses=fs.readFileSync('Courses.json');

const userAuthentication = (req, res, next) => {      
  const { username, password } = req.headers;   
  const USERS=JSON.parse(datauser);

  const user = USERS.find(u => u.username === username && u.password === password);
  if (user) {
    req.user = user;  // Add user object to the request
    next();
  } else {
    res.status(403).json({ message: 'User authentication failed' });
  }
};

const adminAuthentication = (req, res, next) => {
  const { username, password}=req.headers;
  const ADMINS=JSON.parse(dataadmin);

  const admin=ADMINS.find(ad=> ad.username===username && ad.password===password);

  if(admin)
  {
    req.admin=admin;
    next();
  }
  else
  res.status(403).json({message: 'Admin authentication failed'});
}

// Admin routes
app.post('/admin/signup', (req, res) => {
  // logic to sign up admin
  const 
});

app.post('/admin/login', (req, res) => {
  // logic to log in admin
});

app.post('/admin/courses', (req, res) => {
  // logic to create a course
});

app.put('/admin/courses/:courseId', (req, res) => {
  // logic to edit a course
});

app.get('/admin/courses', (req, res) => const fs = require('fs');

const data = 'Hello, world!';

fs.writeFile('file.txt', data, (err) => {
  if (err) throw err;
  console.log('Data written to file');
});{
  // logic to get all courses
});

// User routes
app.post('/users/signup', (req, res) => {
  // logic to sign up user
});

app.post('/users/login', (req, res) => {
  // logic to log in user
});

app.get('/users/courses', (req, res) => {
  // logic to list all courses
});

app.post('/users/courses/:courseId', (req, res) => {
  // logic to purchase a course
});

app.get('/users/purchasedCourses', (req, res) => {
  // logic to view purchased courses
});

app.listen(3000, () => {
  console.log('Server is listening on port 3000');
});
