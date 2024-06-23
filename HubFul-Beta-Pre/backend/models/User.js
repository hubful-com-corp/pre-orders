const { supabase } = require('../config/supabaseClient');

const createUser = async (username, email, accountType) => {
    const { data, error } = await supabase
        .from('users')
        .insert([
            { username, email, account_type: accountType }
        ]);

    if (error) throw error;
    return data;
};

const getAllUsers = async () => {
    const { data, error } = await supabase
        .from('users')
        .select('*');

    if (error) throw error;
    return data;
};

module.exports = { createUser, getAllUsers };
