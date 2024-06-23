import React, { useState } from 'react';
import { loadStripe } from '@stripe/stripe-js';
import { Elements, CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import axios from '../axios';

// Replace with your actual Stripe publishable key
const stripePromise = loadStripe('pk_live_t4zEfjanleZuX4Q7gw8ZH9ox00xpQB1hvW');

const CheckoutForm = () => {
    const stripe = useStripe();
    const elements = useElements();
    const [error, setError] = useState(null);
    const [paymentSucceeded, setPaymentSucceeded] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!stripe || !elements) {
            return;
        }

        const { data: { clientSecret } } = await axios.post('/payments/create-payment-intent', {
            amount: 5000, // amount in cents
            currency: 'usd',
        });

        const payload = await stripe.confirmCardPayment(clientSecret, {
            payment_method: {
                card: elements.getElement(CardElement),
            },
        });

        if (payload.error) {
            setError(`Payment failed: ${payload.error.message}`);
        } else {
            setPaymentSucceeded(true);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <CardElement />
            <button type="submit" disabled={!stripe}>
                Pay
            </button>
            {error && <div>{error}</div>}
            {paymentSucceeded && <div>Payment succeeded!</div>}
        </form>
    );
};

const CheckoutPage = () => (
    <Elements stripe={stripePromise}>
        <CheckoutForm />
    </Elements>
);

export default CheckoutPage;
