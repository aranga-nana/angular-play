import { NgModule } from '@angular/core';
import { RouterModule }   from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';


import { AppComponent } from './app.component';
import { PageNotFoundComponent } from './page-not-found.component'
import { AppRoutingMoudle } from './app-routing.module';

import { CrisisModule } from './crisis/crisis.module';
import { HeroModule } from './hero/hero.module';


@NgModule({

  imports: [
    BrowserModule,
    AppRoutingMoudle,
    CrisisModule,
    HeroModule
  ],
  declarations: [
    
    PageNotFoundComponent,
    AppComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
