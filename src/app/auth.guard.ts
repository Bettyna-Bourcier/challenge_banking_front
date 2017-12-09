import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { Router } from '@angular/router';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private router: Router) { }
  canActivate() {
    if (localStorage.getItem('currentUser')) {
        // User is logged
        return true;
    }

    // Redirect to login page when user is not logged
    this.router.navigate(['/login']);
    return false;
}
}
