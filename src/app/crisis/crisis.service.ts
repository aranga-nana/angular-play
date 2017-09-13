import { Injectable } from '@angular/core';

import { Crisis,CRISES } from './crisis';

@Injectable()
export class CrisisService{

    getCrisis():Promise<Crisis[]>{

           return new Promise(resolve=>{
                setTimeout(resolve(CRISES),250);
           }) ;
    }

    getCrisisbyId(id:number):Promise<Crisis>{
        return new Promise((resolve,reject)=>{
                setTimeout(function(){
                    let f:Crisis;
                    CRISES.forEach(function(v,k){
                        if (v.id==id){
                            f=v;
                        }
                    });
                    if (f != null){
                        resolve(f);
                        return;
                    }
                    reject({"message":"404"});
            },300);
        });
    }

}