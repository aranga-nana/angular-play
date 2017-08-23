import 'rxjs/add/operator/switchMap';
import { Component, OnInit }      from '@angular/core';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';

import { Observable }            from 'rxjs/Observable';

import { CrisisService } from './crisis.service';
import { Crisis } from './crisis';

@Component({
    templateUrl : './crisis-detail.component.html'
})
export class CrisisListComponent implements OnInit{

    crises:Observable<Crisis[]>;
    selectedId:number;

    constructor(private router:Router,
                private route:ActivatedRoute,
                private crisisService:CrisisService
    ){}

    ngOnInit():void{
    
        this.crises = this.route.paramMap
        .switchMap((params: ParamMap) => {
          this.selectedId = +params.get('id');
          return this.crisisService.getCrisis();
        });
  
    }

    isSelected(id:number){
        return this.selectedId === id;
    }
}