import { Component, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  private readonly authService = inject(AuthService);
  private readonly router = inject(Router);

  username = '';
  password = '';
  errorMessage = signal<string | null>(null);

  constructor() {
    const navigation = this.router.currentNavigation();
    const stateError = navigation?.extras.state?.['error'];
    if (stateError) {
      this.errorMessage.set(stateError);
    }
  }

  onLogin() {
    this.authService.login(this.username, this.password).subscribe({
      error: (err) => {
        this.errorMessage.set('Invalid username or password.');
      },
    });
  }
}
