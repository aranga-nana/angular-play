import 'rxjs/add/operator/map';
import { Observable } from 'rxjs'

import { Injectable } from '@angular/core';
import { HttpClient,HttpResponse } from '@angular/common/http'
import { Response } from '@angular/http'

import {IToken } from './token';
import { TokenUtils } from './token-utils';

@Injectable()
export class AuthTokenService{
    constructor(private http:HttpClient){}
    
    login(username:string,password:string):Observable<IToken[]>{
        
        let util = new TokenUtils();
        return this.http.get('/api/login').map((r:HttpResponse<any>)=>{
            return r.body.results.map(t=>util.convert(t));
        });
        
    }

}