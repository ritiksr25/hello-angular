import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css'],
})
export class AddComponent implements OnInit {
  @Output() addTodo: EventEmitter<any> = new EventEmitter();
  title: string;

  constructor() {}

  ngOnInit(): void {}

  onSubmit() {
    this.addTodo.emit({ title: this.title });
  }
}
