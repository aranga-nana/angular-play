import { NgModule } from '@angular/core';
import { RouterModule , Routes} from '@angular/router';

import { CrisisCenterComponent } from './crisis-center.component';

const crisisRotes:Routes=[
    {path:'crisis-center', component: CrisisCenterComponent}
]

@NgModule({
    imports:[
        RouterModule.forChild(crisisRotes)
    ],
    exports:[RouterModule]

})
export class CrisisRoutingModule{

}