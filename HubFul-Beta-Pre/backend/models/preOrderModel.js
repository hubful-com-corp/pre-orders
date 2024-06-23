const { DataTypes } = require('@supabase/supabase-js');
const { supabase } = require('../config/supabaseClient');

const PreOrder = supabase
    .from('PreOrders')
    .schema('public')
    .createTable({
        id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
        username: { type: DataTypes.STRING, allowNull: false },
        email: { type: DataTypes.STRING, allowNull: false, unique: true },
        accountType: { type: DataTypes.STRING, allowNull: false },
        planType: { type: DataTypes.STRING, allowNull: false },
        businessName: { type: DataTypes.STRING, allowNull: true },
    });

module.exports = PreOrder;
