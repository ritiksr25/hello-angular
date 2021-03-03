import { Component, OnInit } from '@angular/core';
import { Todo } from 'src/app/models/todo.model';
import { TodoService } from 'src/app/services/todo.service';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css'],
})
export class TodosComponent implements OnInit {
  todos: Todo[];
  constructor(private todoService: TodoService) {}

  ngOnInit(): void {
    this.todoService.getTodos().subscribe((todos) => (this.todos = todos.data));
  }

  deleteTodo(todo: Todo) {
    this.todos = this.todos.filter((_todo) => {
      return _todo._id !== todo._id;
    });
    this.todoService.deleteTodo(todo._id).subscribe();
  }

  addTodo(todo: Todo) {
    this.todoService
      .addTodo(todo.title)
      .subscribe((todo) => this.todos.push(todo.data));
  }
}
