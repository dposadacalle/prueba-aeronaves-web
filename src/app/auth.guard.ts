import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from './services/auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private _authService: AuthService, private _router: Router){}

  canActivate(): boolean{
    if(this._authService.loggedIn()) return true;
    this._router.navigate(['/singin']);
    return false;
  }
   
  
  
}
