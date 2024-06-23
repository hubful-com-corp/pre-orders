const { supabase } = require('../config/supabaseClient');
const PreOrder = require('../models/preOrderModel');

const createPreOrder = async (req, res) => {
    const { username, email, accountType, planType, businessName } = req.body;

    const { data, error } = await supabase
        .from('PreOrders')
        .insert([{ username, email, accountType, planType, businessName }]);

    if (error) return res.status(400).json({ error: error.message });

    res.status(201).json(data);
};

const getPreOrders = async (req, res) => {
    const { data, error } = await supabase
        .from('PreOrders')
        .select('*');

    if (error) return res.status(400).json({ error: error.message });

    res.status(200).json(data);
};

module.exports = { createPreOrder, getPreOrders };
