import { Injectable } from '@angular/core';
import { Hero } from './hero';
import { HEROES } from './mock-heros';

@Injectable()
export class HeroService {

    getHeroes(): Promise<Hero[]> {


        return new Promise((resolve) => {
            setTimeout(() => resolve(HEROES), 300);
        });

    }

    getHeroById(id: number): Promise<Hero> {
        return new Promise((resolve, reject) => {
            if (id == null) {
                reject({ message: 'id cannot be null' });

            }
            else {
                let found = 0;
                let i=0
                HEROES.forEach(e => {
                    if (e.id == id){
                        found =i;
                    }
                    i++;
                });
                if (found){
                    resolve(HEROES[found]);
                    console.log('F')
                }
                else{
                    reject({ message: 'id not found' });
                }
                
            }

        });
    }
}