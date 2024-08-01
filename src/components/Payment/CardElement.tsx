import React from 'react';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import axios from 'axios';

const CheckoutForm = () => {
    const stripe = useStripe();
    const elements = useElements();

    const handleSubmit = async (event: { preventDefault: () => void; }) => {
        event.preventDefault();
    
        if (!stripe || !elements) {
            return;
        }
    
        const cardElement = elements.getElement(CardElement);
    
        if (cardElement) {
            const { error, paymentMethod } = await stripe.createPaymentMethod({
                type: 'card',
                card: cardElement,
            });
    
            if (error) {
                console.log('[error]', error);
            } else {
                const response = await axios.post('/charge', {
                    amount: 1000, // Amount in cents
                    stripeToken: paymentMethod.id,
                });
    
                if (response.data.status === 'success') {
                    alert('Payment Successful!');
                } else {
                    alert('Payment Failed: ' + response.data.message);
                }
            }
        }
    };
    


    return (
        <form onSubmit={handleSubmit}>
            <CardElement />
            <button type="submit" disabled={!stripe}>
                Pay
            </button>
        </form>
    );
};

export default CheckoutForm;
