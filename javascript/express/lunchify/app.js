const express = require('express')
const _ = require('underscore')
const bodyParser = require('body-parser')
const app = express()
// Our list of students
const students = require('./students')
const restaurants = require('./restaurants')

app.use(bodyParser.json())

/* Landing page */
app.get('/', (req, res) => {
  // Use underscore to get two random students
  const randomStudents = _.sample(students, 3);
  const randomRestaurant = _.sample(restaurants, 1)
  res.send(
    `<h1>${randomRestaurant[0]}</h1>
    <p>Matched: ${randomStudents[0]}, ${randomStudents[1]} and ${randomStudents[2]}</p>`
  )
})

/* API endpoints */
app.get('/api/students', (req, res) => {
  console.log('Getting a list of students')
  res.json(students)
})

app.get('/api/restaurants', (req, res) => {
  console.log('Getting a list of restaurants')
  res.json(restaurants)
})

app.post('/api/students', (req, res) => {
  const newStudent = req.body.student
  console.log('Adding a new student:', newStudent)
  students.push(newStudent)
  res.json(newStudent)
})

app.post('/api/restaurants', (req, res) => {
  const newRestaurant = req.body.restaurant
  console.log('Adding a new restaurant:', newRestaurant)
  restaurants.push(newRestaurant)
  res.json(newRestaurant)
})

app.listen(3000, () => console.log('Server running at http://localhost:3000/'))