import {Component, EventEmitter, Input, Output} from '@angular/core';
import { TodoElementable } from "../todo-form/todo-form.component";

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent {
  @Input() todo: TodoElementable[] = [];
  @Output() onTaskDone: EventEmitter<number | string> = new EventEmitter<number | string>();

  taskDone(id: number | string) {
    this.onTaskDone.emit(id);
  }
}
