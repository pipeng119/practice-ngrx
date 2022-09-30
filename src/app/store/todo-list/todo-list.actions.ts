import { createAction, props } from '@ngrx/store';
import { TodoListState } from './todo-list.reducer';

export enum TodoListTypes {
  FetchTodoListStart = '[Todo List] Fetch todo list start',
  FetchTodoListSuccess = '[Todo List] Fetch todo list success',
}

export const FetchTodoListStart = createAction(
  TodoListTypes.FetchTodoListStart
);
export const FetchTodoListSuccess = createAction(
  TodoListTypes.FetchTodoListSuccess,
  (data) => ({
    request: TodoListTypes.FetchTodoListSuccess,
    data,
  })
);
