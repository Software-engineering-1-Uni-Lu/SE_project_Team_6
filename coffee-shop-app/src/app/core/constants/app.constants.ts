export const API_ENDPOINTS = {
  AUTH: {
    LOGIN: '/auth/login',
    LOGOUT: '/auth/logout',
    REGISTER: '/auth/register',
    REFRESH: '/auth/refresh',
    FORGOT_PASSWORD: '/auth/forgot-password',
    RESET_PASSWORD: '/auth/reset-password',
  },
  MENU: {
    ITEMS: '/menu/items',
    ITEM_BY_ID: (id: string) => `/menu/items/${id}`,
    CATEGORIES: '/menu/categories',
    SEARCH: '/menu/search',
  },
  ORDERS: {
    BASE: '/orders',
    BY_ID: (id: string) => `/orders/${id}`,
    CUSTOMER_ORDERS: (customerId: string) => `/orders/customer/${customerId}`,
    CANCEL: (id: string) => `/orders/${id}/cancel`,
    STATUS: (id: string) => `/orders/${id}/status`,
  },
  INVENTORY: {
    INGREDIENTS: '/inventory/ingredients',
    INGREDIENT_BY_ID: (id: string) => `/inventory/ingredients/${id}`,
    ALERTS: '/inventory/alerts',
  },
  STAFF: {
    BASE: '/staff',
    BY_ID: (id: string) => `/staff/${id}`,
    ORDER_QUEUE: '/staff/orders/queue',
  },
  MANAGER: {
    STAFF_ACCOUNTS: '/manager/staff',
    PROMOTIONS: '/manager/promotions',
    ANALYTICS: '/manager/analytics',
  },
  CUSTOMER: {
    PROFILE: '/customer/profile',
    LOYALTY: '/customer/loyalty',
    ORDER_HISTORY: '/customer/orders',
  },
};

export const ROUTE_PATHS = {
  HOME: '',
  AUTH: {
    LOGIN: 'login',
    REGISTER: 'register',
    FORGOT_PASSWORD: 'forgot-password',
  },
  CUSTOMER: {
    BASE: 'customer',
    MENU: 'menu',
    CART: 'cart',
    CHECKOUT: 'checkout',
    ORDERS: 'orders',
    PROFILE: 'profile',
    LOYALTY: 'loyalty',
  },
  STAFF: {
    BASE: 'staff',
    DASHBOARD: 'dashboard',
    ORDER_QUEUE: 'order-queue',
    INVENTORY: 'inventory',
  },
  MANAGER: {
    BASE: 'manager',
    DASHBOARD: 'dashboard',
    MENU_MANAGEMENT: 'menu-management',
    STAFF_MANAGEMENT: 'staff-management',
    INVENTORY_MANAGEMENT: 'inventory-management',
    PROMOTIONS: 'promotions',
    ANALYTICS: 'analytics',
  },
  ADMIN: {
    BASE: 'admin',
    DASHBOARD: 'dashboard',
    SYSTEM_LOGS: 'system-logs',
    BACKUPS: 'backups',
    DOCUMENTATION: 'documentation',
  },
};

export const STORAGE_KEYS = {
  AUTH_TOKEN: 'auth_token',
  REFRESH_TOKEN: 'refresh_token',
  USER_DATA: 'user_data',
  CART: 'shopping_cart',
  PREFERENCES: 'user_preferences',
};
