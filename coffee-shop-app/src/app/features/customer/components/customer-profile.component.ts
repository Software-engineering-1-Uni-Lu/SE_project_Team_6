import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-customer-profile',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <div class="profile-container">
      <h2>My Profile</h2>
      <!-- Profile details and edit form will be here -->
    </div>
  `,
  styles: [
    `
      .profile-container {
        padding: 2rem;
      }
    `,
  ],
})
export class CustomerProfileComponent {}
