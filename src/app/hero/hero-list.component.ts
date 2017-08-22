import 'rxjs/add/operator/switchMap';
import { Observable } from 'rxjs/Observable';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';

import { Hero } from './hero';
import { HeroService } from './hero.service';

@Component({
    templateUrl : './hero-list.component.html'
})
export class HeroListComponent implements OnInit{

    heroes: Observable<Hero[]>;
    selectedHero:Hero;
    selectedId:number;
    constructor(private router: Router,
                private route: ActivatedRoute,
                private heroService:HeroService){}

    ngOnInit():void {
        this.heroes= this.route.paramMap
        .switchMap((params: ParamMap) => {
          // (+) before `params.get()` turns the string into a number
            this.selectedId = +params.get('id');
          return this.heroService.getHeroes();
        });
        
    }

  
    onSelectHero(hero:Hero):void{
        this.selectedId = hero.id;
        this.router.navigate(['/hero', hero.id]);
    }
   
}
