import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CompteurComponent } from './components/compteur/compteur.component';
import { HelloComponent } from './components/hello/hello.component';
import { TimerComponent } from './components/timer/timer.component';
import { ToDoListComponent } from './components/to-do-list/to-do-list.component';
import { TimerPipe } from './pipes/timer.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HelloComponent,
    CompteurComponent,
    TimerComponent,
    TimerPipe,
    ToDoListComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ButtonModule,
    CardModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
