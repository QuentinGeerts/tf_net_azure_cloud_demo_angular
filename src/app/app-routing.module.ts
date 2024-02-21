import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CompteurComponent } from './components/compteur/compteur.component';
import { HelloComponent } from './components/hello/hello.component';
import { HomeComponent } from './components/home/home.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { TimerComponent } from './components/timer/timer.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },

  { path: 'compteur', component: CompteurComponent },
  { path: 'hello', component: HelloComponent },
  { path: 'timer', component: TimerComponent },


  // Exercices
  // {
  //   path: 'exos', children: [
  //     { path: '', component: ExosComponent },
  //     { path: 'todolist', component: ToDoListComponent }
  //   ]
  // },
  { path: 'exos', loadChildren: () => import('./exos/exos.module').then(m => m.ExosModule) },

  // Démonstrations
  // Chargement à la demande → Lazy-Loading
  { path: 'demos', loadChildren: () => import('./demos/demos.module').then(m => m.DemosModule) },


  // Redirection vers l'accueil lorsque le path est vide
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  // Chemin non reconnu
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
