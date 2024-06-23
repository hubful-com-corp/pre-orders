import React, { useState, useEffect } from 'react';
import axios from 'axios';

const PreOrderLandingPage = () => {
    const [formData, setFormData] = useState({
        username: '',
        email: '',
        accountType: 'hubful-hub'
    });
    const [countdown, setCountdown] = useState('');

    useEffect(() => {
        const countdownDate = new Date("Jul 30, 2024 00:00:00").getTime();
        const interval = setInterval(() => {
            const now = new Date().getTime();
            const distance = countdownDate - now;
            const days = Math.floor(distance / (1000 * 60 * 60 * 24));
            const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((distance % (1000 * 60)) / 1000);
            setCountdown(`${days}d ${hours}h ${minutes}m ${seconds}s`);

            if (distance < 0) {
                clearInterval(interval);
                setCountdown("EXPIRED");
            }
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    const handleInputChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('http://localhost:5000/api/auth/register', formData)
            .then(response => {
                console.log(response.data);
                alert('Registration successful!');
            })
            .catch(error => {
                console.error('Error:', error);
                alert('Registration failed!');
            });
    };

    return (
        <div>
            <header>
                <h1>HubFul Beta Account Pre-Order</h1>
            </header>
            <section id="overview">
                <h2>Overview of HubFul.com</h2>
                <p>Empowering businesses to thrive in the dynamic world of social commerce...</p>
                <p>HubFul.com offers tools and features to help you grow your business, connect with customers, and manage your operations effectively.</p>
            </section>
            <section id="account-types">
                <h2>Choose Your Account Type</h2>
                <div className="account-box">
                    <h3>HubFul Hub</h3>
                    <p>For Regular Users</p>
                    <button onClick={() => setFormData({ ...formData, accountType: 'hubful-hub' })}>Lifetime Pricing</button>
                    <button onClick={() => setFormData({ ...formData, accountType: 'hubful-hub' })}>One Year Discount Pricing</button>
                </div>
                <div className="account-box">
                    <h3>HubFul BizHub</h3>
                    <p>For Business Users/Owners</p>
                    <button onClick={() => setFormData({ ...formData, accountType: 'hubful-bizhub' })}>Lifetime Special Limited Pricing</button>
                </div>
            </section>
            <section id="registration">
                <h2>Sign Up for Beta Access</h2>
                <form onSubmit={handleSubmit}>
                    <input
                        type="text"
                        name="username"
                        value={formData.username}
                        onChange={handleInputChange}
                        placeholder="Username"
                        required
                    />
                    <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="Email"
                        required
                    />
                    <select name="accountType" value={formData.accountType} onChange={handleInputChange} required>
                        <option value="hubful-hub">HubFul Hub</option>
                        <option value="hubful-bizhub">HubFul BizHub</option>
                    </select>
                    <button type="submit">Sign Up</button>
                </form>
            </section>
            <section id="countdown">
                <h2>Pre-Order Countdown</h2>
                <div id="countdown-timer">{countdown}</div>
            </section>
            <section id="pricing">
                <h2>Pricing Plans</h2>
                <div className="pricing-box">
                    <h3>Lifetime Pricing</h3>
                    <p>Get access to HubFul Hub for a one-time fee.</p>
                    <p><strong>$199.99</strong></p>
                </div>
                <div className="pricing-box">
                    <h3>One Year Discount Pricing</h3>
                    <p>Enjoy HubFul Hub at a discounted price for one year.</p>
                    <p><strong>$19.99</strong> per year</p>
                </div>
                <div className="pricing-box">
                    <h3>Lifetime Special Limited Pricing</h3>
                    <p>Exclusive offer for business users with HubFul BizHub.</p>
                    <p><strong>$299.99</strong></p>
                </div>
            </section>
            <section id="features">
                <h2>Key Features</h2>
                <ul>
                    <li>Comprehensive business management tools</li>
                    <li>Advanced customer relationship management</li>
                    <li>Seamless social media integration</li>
                    <li>Robust analytics and reporting</li>
                    <li>Customizable user experience</li>
                </ul>
            </section>
            <section id="contact">
                <h2>Contact Us</h2>
                <p>If you have any questions, feel free to reach out to us at <a href="mailto:support@hubful.com">support@hubful.com</a>.</p>
            </section>
        </div>
    );
};

export default PreOrderLandingPage;
