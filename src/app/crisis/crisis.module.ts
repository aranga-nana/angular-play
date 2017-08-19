import { NgModule} from '@angular/core';

import { CrisisCenterComponent } from './crisis-center.component';
import { CrisisRoutingModule } from './crisis-routing.module';

@NgModule({
    declarations:[
        CrisisCenterComponent
    ],
    imports:[
        CrisisRoutingModule
    ]
})
export class CrisisModule{

}