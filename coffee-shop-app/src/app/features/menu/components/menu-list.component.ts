import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-menu-list',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <div class="menu-container">
      <h2>Menu</h2>
      <!-- Menu items will be displayed here -->
    </div>
  `,
  styles: [
    `
      .menu-container {
        padding: 2rem;
      }
    `,
  ],
})
export class MenuListComponent {}
