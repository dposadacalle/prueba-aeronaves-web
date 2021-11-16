import { Injectable } from '@angular/core';
import { HttpInterceptor } from '@angular/common/http'
import { AuthService } from './auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class TokenInterceptorService implements HttpInterceptor {

  constructor(private _authService: AuthService) { }

  intercept(req: any, next: any) {
    
    let tokenizeReq = req.clone({
      setHeaders: {
        Authorization: `Bearer ${this._authService.getToken()}`
      }
    });
    return next.handle(tokenizeReq);
  }
  
}
