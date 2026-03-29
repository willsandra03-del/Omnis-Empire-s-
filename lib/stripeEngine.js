'use strict';

const stripe = require('stripe')('your_stripe_secret_key'); // replace with your actual secret key

// Initialize Stripe payment
const initializeStripe = async (amount, currency = 'usd') => {
    const paymentIntent = await stripe.paymentIntents.create({
        amount,
        currency,
    });
    return paymentIntent;
};

// Webhook handler
const webhookHandler = async (req, res) => {
    const sig = req.headers['stripe-signature'];
    const webhookSecret = 'your_webhook_secret'; // replace with your actual webhook secret

    let event;

    try {
        event = stripe.webhooks.constructEvent(req.body, sig, webhookSecret);
    } catch (err) {
        console.error('Webhook error:', err.message);
        return res.status(400).send(`Webhook Error: ${err.message}`);
    }

    // Handle the event
    switch (event.type) {
        case 'payment_intent.succeeded':
            console.log('PaymentIntent was successful!', event.data.object);
            break;
        // ... handle other event types
        default:
            console.log(`Unhandled event type ${event.type}`);
    }

    res.json({ received: true });
};

module.exports = { initializeStripe, webhookHandler };