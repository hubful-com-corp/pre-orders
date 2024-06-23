const express = require('express');
const { createPreOrder, getPreOrders } = require('../controllers/preOrderController');
const router = express.Router();

router.post('/create', createPreOrder);
router.get('/', getPreOrders);

module.exports = router;
