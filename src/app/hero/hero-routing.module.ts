import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HeroListComponent } from './hero-list.component';
import { HeroDetailComponent } from './hero-detail.component';

const heroRouts:Routes=[
    {path:'heroes', component : HeroListComponent},
    {path:'hero/:id', component : HeroDetailComponent},

];

@NgModule({
    imports:[RouterModule.forChild(heroRouts)],
    exports:[RouterModule]
})
export class HeroRoutingModule {

}