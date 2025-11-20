export interface Ingredient {
  id: string;
  name: string;
  unit: string;
  quantityInStock: number;
  minimumStock: number;
  supplierId?: string;
  cost: number;
  isAvailable: boolean;
  createdAt: Date;
  updatedAt: Date;
}

export interface InventoryAlert {
  id: string;
  ingredientId: string;
  ingredientName: string;
  alertType: 'low_stock' | 'out_of_stock' | 'expiring_soon';
  message: string;
  createdAt: Date;
  acknowledgedAt?: Date;
  acknowledgedBy?: string;
}
