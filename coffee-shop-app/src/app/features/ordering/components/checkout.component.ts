import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-checkout',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <div class="checkout-container">
      <h2>Checkout</h2>
      <!-- Checkout form will be implemented here -->
    </div>
  `,
  styles: [
    `
      .checkout-container {
        padding: 2rem;
      }
    `,
  ],
})
export class CheckoutComponent {}
