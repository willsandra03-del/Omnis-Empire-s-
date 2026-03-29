// Moniepoint Payment Functions for NGN Transactions

/**
 * Function to initiate a payment.
 * @param {number} amount - The amount to be charged in NGN.
 * @param {string} currency - The currency code (should be NGN).
 * @returns {Promise} - Promise resolving to payment initiation response.
 */
function initiatePayment(amount, currency) {
    return new Promise((resolve, reject) => {
        if (currency !== 'NGN') {
            return reject('Currency must be NGN.');
        }
        // Logic to initiate payment
        console.log(`Initiating payment of ${amount} ${currency}`);
        // Simulate an API call
        setTimeout(() => {
            resolve({ status: 'success', transactionId: '123456789' });
        }, 1000);
    });
}

/**
 * Function to confirm a payment.
 * @param {string} transactionId - The ID of the transaction to confirm.
 * @returns {Promise} - Promise resolving to payment confirmation response.
 */
function confirmPayment(transactionId) {
    return new Promise((resolve) => {
        // Logic to confirm payment
        console.log(`Confirming payment with ID: ${transactionId}`);
        // Simulate an API call
        setTimeout(() => {
            resolve({ status: 'confirmed', transactionId: transactionId });
        }, 1000);
    });
}

/**
 * Function to get payment status.
 * @param {string} transactionId - The ID of the transaction to check.
 * @returns {Promise} - Promise resolving to the payment status.
 */
function getPaymentStatus(transactionId) {
    return new Promise((resolve) => {
        // Logic to check payment status
        console.log(`Checking status for transaction ID: ${transactionId}`);
        // Simulate an API call
        setTimeout(() => {
            resolve({ status: 'completed', transactionId: transactionId });
        }, 1000);
    });
}

// Exporting the functions for use in other modules.
module.exports = {
    initiatePayment,
    confirmPayment,
    getPaymentStatus
};
