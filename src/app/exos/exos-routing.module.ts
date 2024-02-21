import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExosComponent } from './exos.component';
import { ToDoListComponent } from './to-do-list/to-do-list.component';

const routes: Routes = [
  {
    path: '', component: ExosComponent, children: [
      { path: 'todolist', component: ToDoListComponent }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ExosRoutingModule { }
