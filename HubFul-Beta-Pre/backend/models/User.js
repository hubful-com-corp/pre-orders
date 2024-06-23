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

module.exports = { createUser };
