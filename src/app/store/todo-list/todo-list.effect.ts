import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, of, pluck, switchMap } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { HttpResponseBody } from 'src/app/model/http-response-body';
import { TodoListService } from 'src/app/pages/todo-list/todo-list.service';
import {
  FetchTodoListStart,
  FetchTodoListSuccess,
  TodoListTypes,
} from './todo-list.actions';
import { TodoListState } from './todo-list.reducer';

@Injectable()
export class TodoListEffects {
  constructor(
    private actions$: Actions,
    private todoListService: TodoListService
  ) {}
  todoList$ = createEffect(() =>
    this.actions$.pipe(
      ofType(FetchTodoListStart),
      switchMap(() =>
        this.todoListService.getTodoList().pipe(
          map((res: HttpResponseBody<TodoListState[]>) =>
            FetchTodoListSuccess(res.data)
          ),
          catchError((err) => of(err))
        )
      )
    )
  );
}
