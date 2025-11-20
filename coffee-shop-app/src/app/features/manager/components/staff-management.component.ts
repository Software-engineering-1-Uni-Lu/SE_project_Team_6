import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-staff-management',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="staff-management">
      <h2>Staff Management</h2>
      <!-- Staff management interface -->
    </div>
  `,
  styles: [
    `
      .staff-management {
        padding: 2rem;
      }
    `,
  ],
})
export class StaffManagementComponent {}
