import { Component, OnInit } from '@angular/core';
import { TodoElementable } from "./todo-form/todo-form.component";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  todo: TodoElementable[] = []

  addTodo(todo: TodoElementable) {
    this.todo.push(todo);
    localStorage.setItem("todos", JSON.stringify(this.todo));
  }

  markDoneTask(id: number | string) {
    this.todo = this.todo.map((t: TodoElementable): TodoElementable => {
      return t.id === id ? {...t, status: "Done"} :  t;
    });
    localStorage.setItem("todos", JSON.stringify(this.todo));
  }

  ngOnInit() {
    const savedTodos = localStorage.getItem("todos");
    if(savedTodos) this.todo = (JSON.parse(savedTodos))
  }
}
