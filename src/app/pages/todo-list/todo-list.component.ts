import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { FetchTodoListStart } from 'src/app/store/todo-list/todo-list.actions';
import { TodoListState } from 'src/app/store/todo-list/todo-list.reducer';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss'],
})
export class TodoListComponent implements OnInit {
  todoList: TodoListState[] = [];
  constructor(private store: Store<{ todoList: Array<TodoListState> }>) {}

  ngOnInit(): void {
    this.store.dispatch(FetchTodoListStart());
    this.store
      .select((state) => state.todoList)
      .subscribe((res) => {
        this.todoList = res;
      });
  }
}
