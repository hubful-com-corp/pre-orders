import React, { useState } from 'react';
import axios from '../axios';
import { useParams, useHistory } from 'react-router-dom';

const RegisterPage = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const { type, plan } = useParams();
    const history = useHistory();

    const register = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post('/users/register', { email, password });
            console.log(response.data);
            // Redirect to checkout page after registration
            history.push('/checkout');
        } catch (error) {
            console.error(error.response.data);
        }
    };

    return (
        <div className="register-page">
            <h1>Register for {type} - {plan}</h1>
            <form onSubmit={register}>
                <input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />
                <button type="submit">Register</button>
            </form>
        </div>
    );
};

export default RegisterPage;
