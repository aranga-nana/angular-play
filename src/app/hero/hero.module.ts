
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule }   from '@angular/common';
import { HeroListComponent } from './hero-list.component';
import { HeroDetailComponent } from './hero-detail.component';
import { HeroService } from './hero.service';

import { HeroRoutingModule } from './hero-routing.module';

@NgModule({
    declarations:[
        HeroListComponent,
        HeroDetailComponent
    ],
    imports: [FormsModule,CommonModule,HeroRoutingModule],
    providers: [HeroService]
})
export class HeroModule{

}

