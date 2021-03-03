import { Component, Input, OnInit, EventEmitter, Output } from '@angular/core';
import { Todo } from 'src/app/models/todo.model';
import { TodoService } from 'src/app/services/todo.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css'],
})
export class TodoComponent implements OnInit {
  @Input() todo: Todo;
  @Output() deleteTodo: EventEmitter<Todo> = new EventEmitter();

  constructor(private todoService: TodoService) {}

  ngOnInit(): void {}

  setClasses() {
    return {
      todo: true,
      is_completed: this.todo.completed,
    };
  }

  onToggle(todo: Todo) {
    this.todoService.toggleTodo(todo._id).subscribe((todo) => {
      console.log(todo);
    });
    todo.completed = !todo.completed;
  }

  onDelete(todo: Todo) {
    this.deleteTodo.emit(todo);
  }
}
