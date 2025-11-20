import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-menu-management',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="menu-management">
      <h2>Menu Management</h2>
      <!-- Menu management interface -->
    </div>
  `,
  styles: [
    `
      .menu-management {
        padding: 2rem;
      }
    `,
  ],
})
export class MenuManagementComponent {}
