import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CrisisCenterComponent } from './crisis-center.component';
import { CrisisCenterHomeComponent } from './crisis-center-home.component';
import { CrisisDetailComponent } from './crisis-detail.component';
import { CrisisListComponent } from './crisis-list.component';

const crisisRotes: Routes = [
    {
        path: 'crisis-center',
        component: CrisisCenterComponent,
        children: [
          {
            path: '',
            component: CrisisListComponent
            
          }
        ]
      }
];



@NgModule({
    imports: [
        RouterModule.forChild(crisisRotes)
    ],
    exports: [RouterModule]

})
export class CrisisRoutingModule {

}