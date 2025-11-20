import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <div class="cart-container">
      <h2>Shopping Cart</h2>
      <!-- Cart items will be displayed here -->
    </div>
  `,
  styles: [
    `
      .cart-container {
        padding: 2rem;
      }
    `,
  ],
})
export class CartComponent {}
