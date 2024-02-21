import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { DemoCustomPipesComponent } from './demo-custom-pipes/demo-custom-pipes.component';
import { DemosRoutingModule } from './demos-routing.module';
import { DemosComponent } from './demos.component';
import { IntroDemoComponent } from './intro-demo/intro-demo.component';
import { InfoPipe } from './demo-custom-pipes/info.pipe';
import { ReducePipe } from './demo-custom-pipes/reduce.pipe';


@NgModule({
  declarations: [
    DemosComponent,
    IntroDemoComponent,
    DemoCustomPipesComponent,
    InfoPipe,
    ReducePipe,
  ],
  imports: [
    CommonModule,
    DemosRoutingModule
  ]
})
export class DemosModule { }
