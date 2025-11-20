import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-unauthorized',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <div class="error-container">
      <h1>403 - Unauthorized</h1>
      <p>You don't have permission to access this page.</p>
      <a routerLink="/">Go back to home</a>
    </div>
  `,
  styles: [
    `
      .error-container {
        text-align: center;
        padding: 4rem 2rem;
      }
      h1 {
        font-size: 3rem;
        margin-bottom: 1rem;
      }
      p {
        font-size: 1.2rem;
        margin-bottom: 2rem;
      }
      a {
        color: #007bff;
        text-decoration: none;
      }
    `,
  ],
})
export class UnauthorizedComponent {}
