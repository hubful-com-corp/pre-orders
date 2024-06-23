const { createUser, getAllUsers } = require('../models/User');

const registerUser = async (req, res) => {
    const { username, email, accountType } = req.body;

    try {
        const user = await createUser(username, email, accountType);
        res.status(201).json(user);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

const getPreOrders = async (req, res) => {
    try {
        const users = await getAllUsers();
        res.status(200).json(users);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

module.exports = { registerUser, getPreOrders };
