export interface Promotion {
  id: string;
  name: string;
  description: string;
  discountType: 'percentage' | 'fixed_amount';
  discountValue: number;
  startDate: Date;
  endDate: Date;
  isActive: boolean;
  applicableMenuItemIds?: string[];
  minimumOrderAmount?: number;
  createdAt: Date;
  updatedAt: Date;
}
