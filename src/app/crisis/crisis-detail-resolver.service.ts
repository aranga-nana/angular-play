import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, Resolve } from '@angular/router';
import { Crisis } from './crisis';
import { CrisisService } from './crisis.service';
 

@Injectable()
export class CrisisDetailResolverService implements Resolve<Crisis> {
    constructor(private crisisService:CrisisService){}
    
    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot){
        let id:number = +route.paramMap.get('id');
        
        return this.crisisService.getCrisisbyId(id);
    }
}