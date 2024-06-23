const supabase = require('../config/config');

exports.getPreOrders = async (req, res) => {
    const { data: preOrders, error } = await supabase
        .from('preorders')
        .select('*');

    if (error) return res.status(500).json(error);

    res.status(200).json(preOrders);
};

exports.createCoupon = async (req, res) => {
    const { code, discount } = req.body;

    const { data, error } = await supabase
        .from('coupons')
        .insert([{ code, discount }]);

    if (error) return res.status(500).json(error);

    res.status(201).json(data);
};

exports.getStatistics = async (req, res) => {
    const { data: sales, error } = await supabase
        .from('preorders')
        .select('price');

    if (error) return res.status(500).json(error);

    const totalRevenue = sales.reduce((sum, order) => sum + order.price, 0);
    const preOrdersLeft = 1000 - sales.length; // Assuming 1000 pre-orders available

    res.status(200).json({ totalRevenue, preOrdersLeft });
};
