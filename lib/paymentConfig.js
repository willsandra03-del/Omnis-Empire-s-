// Payment tier configuration
// Maps payment tiers to USD/NGN amounts and coin rewards

export const PAYMENT_TIERS = {
  TIER_1: {
    id: 'tier_1',
    name: 'Sovereign Initiate',
    usd: 10,
    ngn: 5900,
    coins: 5000,
    description: 'Entry to the Empire'
  },
  TIER_2: {
    id: 'tier_2',
    name: 'Imperial Ascendant',
    usd: 50,
    ngn: 29500,
    coins: 30000,
    description: 'Elevate your sovereignty'
  },
  TIER_3: {
    id: 'tier_3',
    name: 'Glorious Sentinel',
    usd: 100,
    ngn: 59000,
    coins: 70000,
    description: 'Command the Empire'
  }
};

export const CURRENCY_SYMBOLS = {
  USD: '$',
  NGN: '₦'
};

export const STRIPE_CONFIG = {
  publishableKey: process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY,
  currencyCode: 'usd'
};

export const MONIEPOINT_CONFIG = {
  apiKey: process.env.MONIEPOINT_API_KEY,
  currencyCode: 'ngn',
  webhookSecret: process.env.MONIEPOINT_WEBHOOK_SECRET
};

export const SUPABASE_CONFIG = {
  url: process.env.NEXT_PUBLIC_SUPABASE_URL,
  anonKey: process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
};