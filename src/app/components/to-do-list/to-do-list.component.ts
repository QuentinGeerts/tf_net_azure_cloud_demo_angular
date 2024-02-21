import { Component } from '@angular/core';
import { Task } from './task.model';

@Component({
  selector: 'app-to-do-list',
  templateUrl: './to-do-list.component.html',
  styleUrl: './to-do-list.component.scss'
})
export class ToDoListComponent {

  valueInput: string = "Faire la vaisselle";
  tasks: Task[] = [];

  // Pour modifier la valeur sans ngModel
  updateValue (event: Event) {
    this.valueInput = (event.target as HTMLInputElement).value;
  }

  addTask (): void {
    let formattedValue = this.valueInput.trim();
    if (this.tasks.some(task => task.label === formattedValue) || formattedValue === "") return;

    this.tasks.push({ label: this.valueInput, done: false });
    this.valueInput = "";
  }

  removeTask (index: number): void {
    this.tasks.splice(index, 1);
  }
}
