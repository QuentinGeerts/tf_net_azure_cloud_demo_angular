import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/shared.module';
import { DemoCustomDirectiveComponent } from './demo-custom-directive/demo-custom-directive.component';
import { DemoCustomPipesComponent } from './demo-custom-pipes/demo-custom-pipes.component';
import { DemosRoutingModule } from './demos-routing.module';
import { DemosComponent } from './demos.component';
import { IntroDemoComponent } from './intro-demo/intro-demo.component';


@NgModule({
    declarations: [
        DemosComponent,
        IntroDemoComponent,
        DemoCustomPipesComponent,
        DemoCustomDirectiveComponent,
    ],
    imports: [
        CommonModule,
        DemosRoutingModule,
        SharedModule,
    ]
})
export class DemosModule { }
