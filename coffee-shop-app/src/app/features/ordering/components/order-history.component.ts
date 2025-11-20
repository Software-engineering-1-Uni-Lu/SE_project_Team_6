import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-order-history',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <div class="order-history-container">
      <h2>Order History</h2>
      <!-- Order history will be displayed here -->
    </div>
  `,
  styles: [
    `
      .order-history-container {
        padding: 2rem;
      }
    `,
  ],
})
export class OrderHistoryComponent {}
