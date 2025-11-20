export const environment = {
  production: true,
  supabase: {
    url: 'YOUR_PRODUCTION_SUPABASE_URL',
    anonKey: 'YOUR_PRODUCTION_SUPABASE_ANON_KEY',
  },
  api: {
    baseUrl: 'https://your-production-domain.com',
  },
  features: {
    loyaltyProgram: true,
    notifications: true,
    analytics: true,
  },
};
