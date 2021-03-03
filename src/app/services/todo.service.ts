import { Injectable } from '@angular/core';
import { Todo } from '../models/todo.model';

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  todos: Todo[];
  constructor() {
    this.todos = [
      {
        id: 1,
        title: 'todo 1',
      },
      {
        id: 2,
        title: 'todo 2',
      },
      {
        id: 3,
        title: 'todo 3',
      },
    ];
  }

  getTodos() {
    return this.todos;
  }

  addTodo(title: string) {
    this.todos.push({ title, id: this.todos.length + 1 });
    return;
  }

  toggleTodo(todo: Todo) {
    this.todos.map((itm) => {
      if (itm.id === todo.id) itm.completed = !itm.completed;
    });
    return;
  }

  deleteTodo(todo: Todo) {
    const indexOfTodo = this.todos.map((itm) => itm.id).indexOf(todo.id);
    this.todos.splice(indexOfTodo, 1);
    return;
  }
}
