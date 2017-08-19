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
            if (id == null ||
                id >= HEROES.length) {
                reject({ message: 'id not found' });

            }
            else {
                resolve(HEROES[id]);
            }

        });
    }
}