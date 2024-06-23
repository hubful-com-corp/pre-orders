const express = require('express');
const router = express.Router();
const { getPreOrders, createCoupon, getStatistics } = require('../controllers/adminController');

router.get('/preorders', getPreOrders);
router.post('/coupon', createCoupon);
router.get('/statistics', getStatistics);

module.exports = router;
