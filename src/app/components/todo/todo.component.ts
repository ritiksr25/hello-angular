import { ThrowStmt } from '@angular/compiler';
import { Component, Input, OnInit } from '@angular/core';
import { Todo } from 'src/app/models/todo.model';
import { TodoService } from 'src/app/services/todo.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css'],
})
export class TodoComponent implements OnInit {
  @Input() todo: Todo;

  constructor(private todoService: TodoService) {}

  ngOnInit(): void {}

  setClasses() {
    return {
      todo: true,
      is_completed: this.todo.completed,
    };
  }

  onToggle(todo: Todo) {
    this.todoService.toggleTodo(todo);
  }

  onDelete(todo: Todo) {
    this.todoService.deleteTodo(todo);
  }
}
