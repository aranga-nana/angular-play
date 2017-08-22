import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Hero } from './hero';
import { HeroService } from './hero.service';

@Component({
    templateUrl : './hero-list.component.html'
})
export class HeroListComponent implements OnInit{

    heroes:Hero[];
    selectedHero:Hero;
    constructor(private router: Router,
                private heroService:HeroService){}

    ngOnInit():void {
        this.getHeros();
    }

    getHeros():void {
        this.heroService.getHeroes().then((r:Hero[])=>{
            console.log(r);
            this.heroes =r;
        }).catch(e=>{
            console.log(e);
        });
    }
    onSelectHero(hero:Hero):void{
        this.selectedHero = hero;
    }
    gotoDetail():void {
        this.router.navigate(['/hero', this.selectedHero.id]);
    }
}
