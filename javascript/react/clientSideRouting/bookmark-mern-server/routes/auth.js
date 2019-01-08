const express = require('express');
const router = express.Router();

const {
  register,
  authenticate,
  login,
  logout
} = require('../middleware/auth')

// Register user
router.post('/register', register)

// Authenticate and log in user
router.post('/login', authenticate, login)

// Log out user
router.get('/logout', logout)

module.exports = router;