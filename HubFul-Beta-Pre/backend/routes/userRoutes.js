const express = require('express');
const { registerUser, getPreOrders } = require('../controllers/userController');
const router = express.Router();

router.post('/register', registerUser);
router.get('/preorders', getPreOrders);

module.exports = router;
