
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HeroComponent } from './hero.component';
import { HeroDetailComponent } from './hero-detail.component';

@NgModule({
    declarations:[
        HeroComponent,
        HeroDetailComponent
    ],
    imports: [FormsModule,BrowserModule],
    exports: [HeroComponent]
})
export class HeroModule{

}

