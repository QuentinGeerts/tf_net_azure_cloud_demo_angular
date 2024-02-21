import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';
import { ExosRoutingModule } from './exos-routing.module';
import { ExosComponent } from './exos.component';
import { ToDoListComponent } from './to-do-list/to-do-list.component';


@NgModule({
  declarations: [
    ExosComponent,
    ToDoListComponent,
  ],
  imports: [
    CommonModule,
    ExosRoutingModule,
    FormsModule,
  ]
})
export class ExosModule { }
