import { Component, OnInit } from '@angular/core';

import { HeroService} from '../services/hero.service';

import { Hero } from '../models/hero';

@Component({
    selector:'my-heroes',
    templateUrl:'./hero.component.html'
})
export class HeroComponent implements OnInit{
    heros:Hero[];
    selectedHero:Hero;

    constructor(private heroService:HeroService){};

    ngOnInit():void {

        //populate hero service
        this.getHero();

    }
    getHero():void {
        this.heroService.getHeroes().then((data:Hero[])=>{
            this.heros = data;
        });
    }

    onSelect(hero:Hero):void {
        this.selectedHero = hero;
    }
}