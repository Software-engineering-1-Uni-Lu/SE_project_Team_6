export const environment = {
  production: false,
  supabase: {
    url: 'YOUR_SUPABASE_URL',
    anonKey: 'YOUR_SUPABASE_ANON_KEY',
  },
  api: {
    baseUrl: 'http://localhost:4200',
  },
  features: {
    loyaltyProgram: true,
    notifications: true,
    analytics: true,
  },
};
