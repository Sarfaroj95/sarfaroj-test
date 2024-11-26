// role.guard.ts
import { Injectable } from '@angular/core';
import {  ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { UserServiceService } from './user-service.service';

@Injectable({
  providedIn: 'root'
})
export class RoleGuard {

  constructor(private userService: UserServiceService, private router: Router) {}

  // This method checks if the user can activate the route
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    const expectedRoles = route.data['roles'] as string[];  // Expected roles for this route

    // Check if the current user has any of the allowed roles
    if (!this.userService.hasAnyRole(expectedRoles)) {
      // Redirect to an unauthorized or login page if the user doesn't have access
      this.router.navigate(['/no-access']);
      return false;
    }

    return true;  // Allow route activation if the user has the required role
  }
}
