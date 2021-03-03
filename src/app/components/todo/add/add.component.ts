import { Component, OnInit } from '@angular/core';
import { TodoService } from 'src/app/services/todo.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css'],
})
export class AddComponent implements OnInit {
  title: string;
  constructor(private todoService: TodoService) {}

  ngOnInit(): void {}

  onSubmit() {
    this.todoService.addTodo(this.title);
  }
}
