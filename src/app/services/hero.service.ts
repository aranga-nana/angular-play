import { Injectable } from '@angular/core';
import { Hero }  from '../models/hero';
import { HEROES } from '../services/mock-heros';

@Injectable()
export class HeroService{

    getHeroes():Promise<Hero[]>{
      
        
        return new Promise((resolve)=>{
               setTimeout(()=>resolve(HEROES),500); 
        });

    }
}