import { NgModule } from '@angular/core';
import { RouterModule }   from '@angular/router';


import { AppComponent } from './app.component';
import { HeroModule } from './hero/hero.module';
import { HeroService } from './services/hero.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    HeroModule
  ],
  providers: [HeroService],
  bootstrap: [AppComponent]
})
export class AppModule { }
