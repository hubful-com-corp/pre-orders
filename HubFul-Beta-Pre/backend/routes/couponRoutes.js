const express = require('express');
const { createCoupon, getCoupons } = require('../controllers/couponController');
const router = express.Router();

router.post('/create', createCoupon);
router.get('/', getCoupons);

module.exports = router;
