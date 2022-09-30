import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpResponseBody } from 'src/app/model/http-response-body';
import { TodoListState } from 'src/app/store/todo-list/todo-list.reducer';

@Injectable({
  providedIn: 'root',
})
export class TodoListService {
  constructor(private http: HttpClient) {}

  getTodoList(): Observable<HttpResponseBody<Array<TodoListState>>> {
    return this.http.get<HttpResponseBody<Array<TodoListState>>>(
      'http://localhost:9527/api/todoList'
    );
  }
}
