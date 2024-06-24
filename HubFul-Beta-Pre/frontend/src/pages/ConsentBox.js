import React from 'react';

const ConsentBox = ({ currentDate }) => {
    return (
        <div className="consent-box">
            <h1>HubFul.com Terms and Conditions Consent Box</h1>
            <p>(Checkout Page - User Registration Page)</p>
            <p><strong>Effective Date:</strong> {currentDate}</p>
            <p>Welcome to HubFul.com! Before you start using our Social Commerce Platform-as-a-Service, we kindly ask you to review the following summary of our Terms and Conditions...</p>
            <ul>
                <li><strong>Acceptance of Terms:</strong> By accessing and using HubFul.com, you agree to be bound by our Terms and Conditions and all applicable laws and regulations.</li>
                <li><strong>User Responsibilities:</strong> You are responsible for maintaining the confidentiality of your account...</li>
                <li><strong>Intellectual Property:</strong> HubFul.com and its associated content are protected by intellectual property laws...</li>
                <li><strong>User Content:</strong> By submitting content to HubFul.com, you grant us a non-exclusive, worldwide...</li>
                <li><strong>Privacy and Data Protection:</strong> We value your privacy and handle your personal information...</li>
                <li><strong>Limitation of Liability:</strong> HubFul.com provides the platform "as is" without warranties of any kind...</li>
                <li><strong>Indemnification:</strong> You agree to indemnify and hold HubFul.com and its affiliates harmless from any claims...</li>
                <li><strong>Modifications to the Terms:</strong> HubFul.com reserves the right to modify or update these Terms and Conditions...</li>
                <li><strong>Termination:</strong> HubFul.com reserves the right to suspend or terminate your access to the platform if you violate...</li>
                <li><strong>Governing Law:</strong> These Terms and Conditions are governed by the laws of [Jurisdiction]...</li>
            </ul>
            <p>Please note that this is just a brief overview of our Terms and Conditions. For complete details, rights, and obligations, we encourage you to read the full document available on our website.</p>
            <p>If you have any questions or concerns regarding our Terms and Conditions, please contact our customer support team for assistance.</p>
            <p><strong>Thank you for choosing HubFul.com!</strong></p>
        </div>
    );
};

export default ConsentBox;
