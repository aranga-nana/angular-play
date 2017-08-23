import { NgModule} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { CrisisCenterComponent } from './crisis-center.component';
import { CrisisCenterHomeComponent} from './crisis-center-home.component'
import { CrisisDetailComponent } from './crisis-detail.component';
import { CrisisListComponent} from './crisis-list.component';
import { CrisisRoutingModule } from './crisis-routing.module';
import { CrisisService } from './crisis.service';


@NgModule({
    imports:[
        CrisisRoutingModule,
        CommonModule,
        FormsModule
    ],
    declarations:[
        CrisisCenterComponent,
        CrisisCenterHomeComponent,
        CrisisDetailComponent,
        CrisisListComponent
      

    ],

    providers:[
        CrisisService
    ]

})
export class CrisisModule{

}