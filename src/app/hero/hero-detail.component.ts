import 'rxjs/add/operator/switchMap';
import { Component, OnInit} from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

import { Hero } from './hero';
import { HeroService } from './hero.service';

@Component({
    selector: 'my-hero-detail',
    templateUrl : './hero-detail.component.html'
})
export class HeroDetailComponent implements OnInit{
    hero:Hero;
    constructor(private route:ActivatedRoute,private router:Router,private heroService:HeroService){}

    ngOnInit():void{
          this.route.paramMap
                .switchMap((params: ParamMap) =>
            this.heroService.getHeroById(+params.get('id')))
                     .subscribe((hero: Hero) => this.hero = hero);    
    }



    goToHeros():void{
        this.router.navigate(['/heroes']);
    }
}