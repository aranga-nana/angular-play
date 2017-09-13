
import { Observable } from 'rxjs/Observable'
import { Injectable } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest } from '@angular/common/http';


import { AuthService } from './auth.service';
import { AuthConfig } from './auth-config';


@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  i:number=0;
  constructor(private auth:AuthService){}
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    
    let cfg = new AuthConfig();
    if (cfg.ignorePath.indexOf(req.url)){
       return next.handle(req);
    }
    let authHeader = this.auth.getBearerToken();
    const authReq = req.clone({headers: req.headers.set('Authorization', authHeader)});
    this.i++;
    console.log(authReq.url);
    console.log('req '+this.i);
    return next.handle(authReq);
  }
}