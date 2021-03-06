import { Injectable } from '@angular/core';
import { Router, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root'
})
export class LoggedInGuardService {

  constructor(private router: Router, private userService: UserService) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree {
    // returns `true` if the user is logged in or redirects to the login page
    // note that you can also use `router.createUrlTree()` to build a `UrlTree` with parameters
    return this.userService.getToken() !== null || this.router.parseUrl('/signin');
  }
  
}
