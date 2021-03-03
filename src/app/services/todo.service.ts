import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  todosUrl: string = 'http://localhost:3000/todos/';
  constructor(private httpModule: HttpClient) {}

  getTodos(): Observable<any> {
    return this.httpModule.get(this.todosUrl);
  }

  addTodo(title: string): Observable<any> {
    return this.httpModule.post(this.todosUrl, { title });
  }

  toggleTodo(id: string): Observable<any> {
    return this.httpModule.put(`${this.todosUrl}${id}`, {});
  }

  deleteTodo(id: string): Observable<any> {
    return this.httpModule.delete(`${this.todosUrl}${id}`);
  }
}
