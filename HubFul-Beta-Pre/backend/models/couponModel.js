const { DataTypes } = require('@supabase/supabase-js');
const { supabase } = require('../config/supabaseClient');

const Coupon = supabase
    .from('Coupons')
    .schema('public')
    .createTable({
        id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
        code: { type: DataTypes.STRING, allowNull: false, unique: true },
        discount: { type: DataTypes.DECIMAL, allowNull: false },
        expiration: { type: DataTypes.DATE, allowNull: false },
    });

module.exports = Coupon;
