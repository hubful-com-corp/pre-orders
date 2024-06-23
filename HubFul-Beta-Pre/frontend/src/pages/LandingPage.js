import React from 'react';
import { Link } from 'react-router-dom';

const LandingPage = () => {
    return (
        <div className="landing-page">
            <header>
                <h1>Welcome to HubFul.com</h1>
                <p>Revolutionizing the way businesses connect with their customers and sell products online!</p>
            </header>
            <section>
                <h2>Overview of HubFul.com</h2>
                <p>Empowering businesses of all sizes to thrive in the dynamic world of social commerce...</p>
                {/* Add more content based on the PDF details */}
            </section>
            <section>
                <h2>Key Features</h2>
                <ul>
                    <li>Social Commerce Simplified</li>
                    <li>Customizable Storefronts</li>
                    <li>Multi-Channel Selling</li>
                    <li>Seamless Payment Processing</li>
                    <li>Advanced Analytics and Reporting</li>
                    <li>Integrations and Business Tools</li>
                    <li>Dedicated Support</li>
                </ul>
            </section>
            <section className="account-types">
                <div className="account-type">
                    <h2>HubFul Hub</h2>
                    <p>For Regular Users</p>
                    <Link to="/pricing/hub">Lifetime Pricing</Link>
                    <Link to="/pricing/hub-discount">One Year Discount Pricing</Link>
                </div>
                <div className="account-type">
                    <h2>HubFul BizHub</h2>
                    <p>For Business Users/Owners</p>
                    <Link to="/pricing/biz">Lifetime Special Limited Pricing</Link>
                </div>
            </section>
            <footer>
                <p>Join HubFul.com today and unlock the potential of social commerce.</p>
            </footer>
        </div>
    );
};

export default LandingPage;
