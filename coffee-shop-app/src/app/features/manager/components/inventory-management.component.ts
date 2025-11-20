import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-inventory-management',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="inventory-management">
      <h2>Inventory Management</h2>
      <!-- Inventory management interface -->
    </div>
  `,
  styles: [
    `
      .inventory-management {
        padding: 2rem;
      }
    `,
  ],
})
export class InventoryManagementComponent {}
