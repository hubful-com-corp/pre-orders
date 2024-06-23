const supabase = require('../config/config');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

exports.register = async (req, res) => {
    const { email, password } = req.body;

    const { data: user, error } = await supabase
        .from('users')
        .select('*')
        .eq('email', email)
        .single();

    if (user) return res.status(400).json({ msg: 'User already exists' });

    const hashedPassword = await bcrypt.hash(password, 10);

    const { data, error: insertError } = await supabase
        .from('users')
        .insert([{ email, password: hashedPassword }]);

    if (insertError) return res.status(500).json(insertError);

    const token = jwt.sign({ id: data[0].id }, process.env.SECRET_OR_KEY, { expiresIn: 3600 });

    res.status(201).json({ token });
};

exports.login = async (req, res) => {
    const { email, password } = req.body;

    const { data: user, error } = await supabase
        .from('users')
        .select('*')
        .eq('email', email)
        .single();

    if (!user) return res.status(404).json({ msg: 'User not found' });

    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) return res.status(400).json({ msg: 'Invalid credentials' });

    const token = jwt.sign({ id: user.id }, process.env.SECRET_OR_KEY, { expiresIn: 3600 });

    res.status(200).json({ token });
};
