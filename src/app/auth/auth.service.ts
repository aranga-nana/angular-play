import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';
import { AuthTokenService } from './auth-token.service';
import { IToken } from './token';

@Injectable()
export class AuthService{

    private storedToken:IToken;
 
    constructor(private tokenService:AuthTokenService){}
    login(username:string,password:string):Promise<boolean>{

        return new Promise((resolve,reject)=>{

            this.tokenService.login(username,password).subscribe((t:IToken[])=>{
                this.storedToken =t[0];
                resolve(true);
            },e=>{
                reject(e);
            });

        });
  }

  private refresh() {
    Observable.interval(40000).subscribe(i=>{
        
    });
  }

  getBearerToken():string{
        return  'bearer '+this. storedToken.token;
  }
}