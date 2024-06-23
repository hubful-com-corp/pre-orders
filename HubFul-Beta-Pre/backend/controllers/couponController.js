const { supabase } = require('../config/supabaseClient');
const Coupon = require('../models/couponModel');

const createCoupon = async (req, res) => {
    const { code, discount, expiration } = req.body;

    const { data, error } = await supabase
        .from('Coupons')
        .insert([{ code, discount, expiration }]);

    if (error) return res.status(400).json({ error: error.message });

    res.status(201).json(data);
};

const getCoupons = async (req, res) => {
    const { data, error } = await supabase
        .from('Coupons')
        .select('*');

    if (error) return res.status(400).json({ error: error.message });

    res.status(200).json(data);
};

module.exports = { createCoupon, getCoupons };
