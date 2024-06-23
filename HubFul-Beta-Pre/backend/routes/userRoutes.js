const express = require('express');
const { registerUser } = require('../controllers/userController');
const router = express.Router();

router.post('/auth/register', registerUser);

module.exports = router;
