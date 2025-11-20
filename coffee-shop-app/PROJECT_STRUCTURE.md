# Coffee Shop App - Angular + Supabase

A modern coffee shop management application built with Angular 21 (standalone components) and Supabase backend.

## 🏗️ Project Structure

```
coffee-shop-app/
├── src/
│   ├── app/
│   │   ├── core/                    # Core singleton services and guards
│   │   │   ├── constants/           # App-wide constants
│   │   │   │   ├── app.constants.ts # API endpoints, routes, storage keys
│   │   │   │   └── index.ts
│   │   │   ├── enums/              # TypeScript enums
│   │   │   │   ├── user-role.enum.ts
│   │   │   │   ├── order-status.enum.ts
│   │   │   │   ├── payment-method.enum.ts
│   │   │   │   └── index.ts
│   │   │   ├── guards/             # Route guards
│   │   │   │   ├── auth.guard.ts   # Authentication guard
│   │   │   │   ├── role.guard.ts   # Role-based access guard
│   │   │   │   └── index.ts
│   │   │   ├── interceptors/       # HTTP interceptors (to be implemented)
│   │   │   ├── models/             # TypeScript interfaces
│   │   │   │   ├── user.model.ts
│   │   │   │   ├── order.model.ts
│   │   │   │   ├── menu.model.ts
│   │   │   │   ├── inventory.model.ts
│   │   │   │   ├── promotion.model.ts
│   │   │   │   └── index.ts
│   │   │   └── services/           # Core services
│   │   │       ├── auth.service.ts      # Authentication logic
│   │   │       └── supabase.service.ts  # Supabase client wrapper
│   │   │
│   │   ├── features/               # Feature modules (lazy-loaded)
│   │   │   ├── auth/               # Authentication module
│   │   │   │   ├── components/
│   │   │   │   │   ├── login.component.ts
│   │   │   │   │   └── register.component.ts
│   │   │   │   ├── services/
│   │   │   │   ├── models/
│   │   │   │   └── auth.routes.ts
│   │   │   │
│   │   │   ├── customer/           # Customer portal
│   │   │   │   ├── components/
│   │   │   │   │   ├── customer-profile.component.ts
│   │   │   │   │   └── loyalty-points.component.ts
│   │   │   │   ├── services/
│   │   │   │   ├── models/
│   │   │   │   └── customer.routes.ts
│   │   │   │
│   │   │   ├── menu/               # Menu browsing
│   │   │   │   ├── components/
│   │   │   │   │   ├── menu-list.component.ts
│   │   │   │   │   └── menu-item-detail.component.ts
│   │   │   │   ├── services/
│   │   │   │   ├── models/
│   │   │   │   └── menu.routes.ts
│   │   │   │
│   │   │   ├── ordering/           # Order management
│   │   │   │   ├── components/
│   │   │   │   │   ├── cart.component.ts
│   │   │   │   │   ├── checkout.component.ts
│   │   │   │   │   └── order-history.component.ts
│   │   │   │   ├── services/
│   │   │   │   ├── models/
│   │   │   │   └── ordering.routes.ts
│   │   │   │
│   │   │   ├── staff/              # Staff dashboard
│   │   │   │   ├── components/
│   │   │   │   │   ├── staff-dashboard.component.ts
│   │   │   │   │   └── order-queue.component.ts
│   │   │   │   ├── services/
│   │   │   │   ├── models/
│   │   │   │   └── staff.routes.ts
│   │   │   │
│   │   │   ├── manager/            # Manager dashboard
│   │   │   │   ├── components/
│   │   │   │   │   ├── manager-dashboard.component.ts
│   │   │   │   │   ├── menu-management.component.ts
│   │   │   │   │   ├── staff-management.component.ts
│   │   │   │   │   └── inventory-management.component.ts
│   │   │   │   ├── services/
│   │   │   │   ├── models/
│   │   │   │   └── manager.routes.ts
│   │   │   │
│   │   │   └── admin/              # Admin panel
│   │   │       ├── components/
│   │   │       │   └── admin-dashboard.component.ts
│   │   │       ├── services/
│   │   │       ├── models/
│   │   │       └── admin.routes.ts
│   │   │
│   │   ├── shared/                 # Shared components and utilities
│   │   │   ├── components/
│   │   │   │   ├── loading.component.ts
│   │   │   │   ├── unauthorized.component.ts
│   │   │   │   └── not-found.component.ts
│   │   │   ├── pipes/
│   │   │   │   ├── currency.pipe.ts
│   │   │   │   └── order-status.pipe.ts
│   │   │   ├── directives/
│   │   │   └── utils/
│   │   │       └── helpers.ts
│   │   │
│   │   ├── app.ts                  # Root component
│   │   ├── app.html                # Root template
│   │   ├── app.scss                # Root styles
│   │   ├── app.config.ts           # App configuration
│   │   └── app.routes.ts           # Main routing configuration
│   │
│   ├── environments/               # Environment configurations
│   │   ├── environment.ts          # Development environment
│   │   └── environment.prod.ts     # Production environment
│   │
│   ├── index.html
│   ├── main.ts
│   └── styles.scss
│
├── angular.json
├── package.json
├── tsconfig.json
└── README.md
```

## 🚀 Features

### User Roles
- **Customer**: Browse menu, place orders, manage profile, loyalty points
- **Staff**: View order queue, update order status, manage inventory alerts
- **Manager**: Manage menu, staff accounts, inventory, promotions, view analytics
- **Admin**: System administration and maintenance

### Core Functionality
- User authentication and authorization (Supabase Auth)
- Role-based access control
- Menu browsing and management
- Order placement and tracking
- Inventory management
- Loyalty program
- Real-time updates (Supabase Realtime)

## 📦 Installation

```bash
# Navigate to project directory
cd coffee-shop-app

# Install dependencies
npm install

# Configure environment variables
# Update src/environments/environment.ts with your Supabase credentials
```

## ⚙️ Configuration

### Supabase Setup

1. Create a Supabase project at [supabase.com](https://supabase.com)
2. Update `src/environments/environment.ts`:

```typescript
export const environment = {
  production: false,
  supabase: {
    url: 'YOUR_SUPABASE_URL',
    anonKey: 'YOUR_SUPABASE_ANON_KEY'
  }
};
```

### Database Schema

Create the following tables in your Supabase database:

- `users` - User accounts and profiles
- `menu_items` - Coffee shop menu items
- `orders` - Customer orders
- `order_items` - Individual items in orders
- `inventory` - Ingredient inventory
- `promotions` - Active promotions and discounts

## 🛠️ Development

```bash
# Start development server
npm start

# Navigate to http://localhost:4200
```

## 🏗️ Build

```bash
# Production build
npm run build

# Output will be in dist/coffee-shop-app
```

## 📝 Routing Structure

- `/` - Redirects to menu
- `/auth/login` - Login page
- `/auth/register` - Registration page
- `/menu` - Public menu browsing
- `/orders/*` - Order management (authenticated)
- `/customer/*` - Customer portal (customer role)
- `/staff/*` - Staff dashboard (staff/manager roles)
- `/manager/*` - Manager dashboard (manager role)
- `/admin/*` - Admin panel (admin role)

## 🔒 Security

- Route guards protect role-specific features
- JWT-based authentication via Supabase
- Row-level security policies in Supabase
- Environment-based configuration

## 🎨 Tech Stack

- **Frontend**: Angular 21 (Standalone Components)
- **Backend**: Supabase
- **Authentication**: Supabase Auth
- **Database**: PostgreSQL (via Supabase)
- **Real-time**: Supabase Realtime
- **Storage**: Supabase Storage
- **Styling**: SCSS
