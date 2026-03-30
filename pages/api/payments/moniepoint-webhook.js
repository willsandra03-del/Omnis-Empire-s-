/**
 * Moniepoint Webhook Handler
 * Listens for successful payment events
 * Updates omnis_coins in Supabase recruits table
 */

import { handleMoniepointWebhook, verifyMoniepointSignature } from '../../../services/moniepointPaymentService';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const signature = req.headers['x-moniepoint-signature'];
    const payload = req.body;

    if (!signature) {
      console.warn('[Moniepoint Webhook] Missing signature header');
      return res.status(400).json({ error: 'Missing signature' });
    }

    // Verify webhook signature
    const isValid = verifyMoniepointSignature(payload, signature);
    
    if (!isValid) {
      console.warn('[Moniepoint Webhook] Signature verification failed');
      return res.status(401).json({ error: 'Invalid signature' });
    }

    // Process the webhook event
    const result = await handleMoniepointWebhook(payload);

    if (result.success) {
      console.log(`[Moniepoint Webhook] ✓ Successfully processed payment for user: ${result.userId}`);
      return res.status(200).json({ 
        success: true, 
        message: 'Coins awarded',
        userId: result.userId,
        coins: result.coins
      });
    } else {
      console.warn(`[Moniepoint Webhook] ! Payment processing incomplete: ${result.reason}`);
      // Return 200 to acknowledge, but log the issue
      return res.status(200).json({ 
        success: false, 
        reason: result.reason 
      });
    }

  } catch (error) {
    console.error('[Moniepoint Webhook] Unexpected error:', error.message);
    // Return 500 so Moniepoint will retry
    return res.status(500).json({ error: 'Internal server error' });
  }
}