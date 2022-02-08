import {Component, EventEmitter, Output } from '@angular/core';

export interface TodoElementable {
  title: string;
  status: string;
  id: number | string;
  date: Date;
  priority: number
}

export class TodoElement implements TodoElementable {
  constructor(
   public title: string,
   public status: string,
   public id: number | string,
   public date: Date,
   public priority: number
  ) {}
}

@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.scss']
})

export class TodoFormComponent {
  @Output() onCreateTodo: EventEmitter<TodoElement> = new EventEmitter<TodoElement>()

  title: string = ""
  priority: number = 1

  constructor() {}

  createTodo() {
    const todo = new TodoElement(
      this.title,
      "To Do",
      Math.random(),
      new Date(),
      this.priority
    )

    this.onCreateTodo.emit(todo);
  }
}
