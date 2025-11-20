import { UserRole } from '../enums';

export interface User {
  id: string;
  email: string;
  role: UserRole;
  firstName?: string;
  lastName?: string;
  phone?: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface Customer extends User {
  role: UserRole.CUSTOMER;
  loyaltyPoints: number;
  preferredPaymentMethod?: string;
}

export interface Staff extends User {
  role: UserRole.STAFF;
  position?: string;
  hireDate?: Date;
}

export interface Manager extends User {
  role: UserRole.MANAGER;
  department?: string;
}
