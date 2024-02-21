import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DemoCustomPipesComponent } from './demo-custom-pipes/demo-custom-pipes.component';
import { DemosComponent } from './demos.component';
import { IntroDemoComponent } from './intro-demo/intro-demo.component';

const routes: Routes = [

  // path : chemin pour accéder au composant
  // component : Charger le composant en fonction du chemin
  // children : Liste de sous route affichée par le <router-outlet>
  {
    path: '', component: DemosComponent, children: [
      { path: 'intro', component: IntroDemoComponent },
      { path: 'custom-pipes', component: DemoCustomPipesComponent },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DemosRoutingModule { }
