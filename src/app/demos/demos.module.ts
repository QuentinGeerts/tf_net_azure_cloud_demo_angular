import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DemosRoutingModule } from './demos-routing.module';
import { DemosComponent } from './demos.component';
import { IntroDemoComponent } from './intro-demo/intro-demo.component';


@NgModule({
  declarations: [
    DemosComponent,
    IntroDemoComponent
  ],
  imports: [
    CommonModule,
    DemosRoutingModule
  ]
})
export class DemosModule { }
