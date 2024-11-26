// auth.guard.ts
import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private router: Router) {}

  canActivate(): boolean {
    const isAuthenticated = !!localStorage.getItem('jwtToken'); // Example: Check if token exists
    if (isAuthenticated) {
      return true; // Allow access
    } else {
      this.router.navigate(['/login']); // Redirect to login if not authenticated
      return false; // Deny access
    }
  }
}