import { Injectable } from '@angular/core';

import { Crisis,CRISES } from './crisis';

@Injectable()
export class CrisisService{

    getCrisis():Promise<Crisis[]>{

           return new Promise(resolve=>{
                setTimeout(resolve(CRISES),250);
           }) ;
    }

}