export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: number;
  category: string;
  imageUrl?: string;
  isAvailable: boolean;
  isSoldOut: boolean;
  ingredients: string[];
  allergens: string[];
  dietaryLabels: string[];
  customizationOptions?: MenuItemCustomization[];
  preparationTime?: number;
  createdAt: Date;
  updatedAt: Date;
}

export interface MenuItemCustomization {
  name: string;
  options: CustomizationOption[];
  required: boolean;
  maxSelections?: number;
}

export interface CustomizationOption {
  name: string;
  priceModifier: number;
}

export interface MenuCategory {
  id: string;
  name: string;
  description?: string;
  displayOrder: number;
  isActive: boolean;
}
