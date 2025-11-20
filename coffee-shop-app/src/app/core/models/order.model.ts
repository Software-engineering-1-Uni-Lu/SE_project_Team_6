import { OrderStatus, PaymentMethod } from '../enums';

export interface Order {
  id: string;
  customerId: string;
  items: OrderItem[];
  status: OrderStatus;
  totalAmount: number;
  loyaltyPointsUsed?: number;
  loyaltyPointsEarned?: number;
  paymentMethod?: PaymentMethod;
  paymentStatus?: 'pending' | 'completed' | 'failed' | 'refunded';
  pickupTime?: Date;
  isAsap: boolean;
  notes?: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface OrderItem {
  id: string;
  menuItemId: string;
  menuItemName: string;
  quantity: number;
  unitPrice: number;
  customizations?: OrderItemCustomization[];
  subtotal: number;
}

export interface OrderItemCustomization {
  name: string;
  value: string;
  priceModifier?: number;
}
