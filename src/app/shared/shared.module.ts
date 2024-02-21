import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HighlightDirective } from './directives/highlight.directive';
import { InfoPipe } from './pipes/info.pipe';
import { ReducePipe } from './pipes/reduce.pipe';
import { TimerPipe } from './pipes/timer.pipe';

@NgModule({
  declarations: [
    TimerPipe,
    ReducePipe,
    InfoPipe,
    HighlightDirective,
  ],
  imports: [
    CommonModule
  ],
  exports: [
    FormsModule,
    TimerPipe,
    ReducePipe,
    InfoPipe,
    HighlightDirective,
  ]
})
export class SharedModule { }
